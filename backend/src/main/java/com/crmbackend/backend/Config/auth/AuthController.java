package com.crmbackend.backend.Config.auth;

import com.crmbackend.backend.Config.request.LoginRequest;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.UserWrapper;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import com.crmbackend.backend.mappers.UserMapper.UserMapper;
import com.crmbackend.backend.utils.MessageResponse;
import com.crmbackend.backend.utils.Response2FA;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;

    private UserRepository userRepository;

    private final UserMapper userMapper;
    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest)  {
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

    @PostMapping("/register")
    public ResponseEntity<Response2FA> registerUser(@RequestBody UserDTORequest userDTORequest) {
       String qURL = authService.registerUser(userDTORequest);
       return ResponseEntity.ok(new Response2FA(qURL, "Successfully registered user!"));
    }
}
