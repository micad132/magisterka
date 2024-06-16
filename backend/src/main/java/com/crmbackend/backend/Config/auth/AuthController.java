package com.crmbackend.backend.Config.auth;

import com.crmbackend.backend.Config.jwt.JwtTokenProvider;
import com.crmbackend.backend.Config.request.LoginRequest;
import com.crmbackend.backend.User.CustomUserDetailsService;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.UserWrapper;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import com.crmbackend.backend.User.UserMapper;
import com.crmbackend.backend.utils.MessageResponse;
import com.crmbackend.backend.utils.Response2FA;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    private UserRepository userRepository;

    private final UserMapper userMapper;
    private final AuthService authService;

    private CustomUserDetailsService customUserDetailsService;

    @PostMapping("/signin")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest, HttpServletRequest request, HttpServletResponse response)  {
        UserModel user = userRepository.findUserModelByUsername(loginRequest.getUsername()).orElse(null);

        if (user == null)
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Nie znaleziono takiego loginu!"));

//        Authentication authentication;

        Object result = authService.verify2FACode(user, loginRequest);
        if (result instanceof String) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse((String) result));
        } else if (result instanceof Authentication) {
            UserWrapper userWrapper = (UserWrapper) ((Authentication) result).getPrincipal();
            String accessToken = jwtTokenProvider.generateAccessToken(userWrapper);
            String refreshToken = jwtTokenProvider.generateRefreshToken(userWrapper);
            Cookie accessTokenCookie = new Cookie("accessToken", accessToken);
            accessTokenCookie.setHttpOnly(true);
            accessTokenCookie.setPath("/");
            accessTokenCookie.setMaxAge(3600); // 60 sekund
            accessTokenCookie.setDomain("localhost");

            Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
            refreshTokenCookie.setHttpOnly(true);
            refreshTokenCookie.setPath("/");
            refreshTokenCookie.setMaxAge(86400); // 1 dzień
            accessTokenCookie.setDomain("localhost");

            response.addCookie(accessTokenCookie);
            response.addCookie(refreshTokenCookie);

            SecurityContextHolder.getContext().setAuthentication((Authentication) result);
            UserDTOResponse loggedUser = Optional.ofNullable((Authentication) result)
                    .filter(f -> f.getPrincipal() instanceof UserWrapper)
                    .map(Authentication::getPrincipal)
                    .map(UserWrapper.class::cast)
                    .map(UserWrapper::getUserModel)
                    .map(userMapper::mapEntityToDTO)
                    .orElse(null);

            return ResponseEntity.ok(loggedUser);
        }
        return ResponseEntity.ok("TEST");

    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("refreshToken".equals(cookie.getName())) {
                    String refreshToken = cookie.getValue();
                    if (jwtTokenProvider.validateToken(refreshToken)) {
                        String username = jwtTokenProvider.getUsernameFromJwt(refreshToken);
                        UserWrapper userDetails = (UserWrapper) customUserDetailsService.loadUserByUsername(username);
                        String newAccessToken = jwtTokenProvider.generateAccessToken(userDetails);

                        Cookie accessTokenCookie = new Cookie("accessToken", newAccessToken);
                        accessTokenCookie.setHttpOnly(true);
                        accessTokenCookie.setPath("/");
                        accessTokenCookie.setMaxAge(60); // 60 sekund

                        response.addCookie(accessTokenCookie);

                        return ResponseEntity.ok().build();
                    }
                }
            }
        }
        return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).body("Niepoprawny token");
    }


    @PostMapping("/register")
    public ResponseEntity<Response2FA> registerUser(@RequestBody UserDTORequest userDTORequest) {
       String qURL = authService.registerUser(userDTORequest);
       return ResponseEntity.ok(new Response2FA(qURL, "Zarejestrowano uzytkownika!"));
    }
}
