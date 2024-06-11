package com.crmbackend.backend.Config.jwt;

import com.crmbackend.backend.User.CustomUserDetailsService;
import com.crmbackend.backend.User.UserWrapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@AllArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService customUserDetailsService;

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    private String getJwtFromCookies(HttpServletRequest request, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookieName.equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }

    private String refreshAccessToken(String refreshToken) {
        // Sprawdź i zweryfikuj refreshToken
        if (jwtTokenProvider.validateToken(refreshToken)) {
            String username = jwtTokenProvider.getUsernameFromJwt(refreshToken);
            UserWrapper userWrapper = (UserWrapper) customUserDetailsService.loadUserByUsername(username);
            if (userWrapper != null) {
                return jwtTokenProvider.generateAccessToken(userWrapper); // Metoda do generowania nowego accessToken
            }
        }
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = getJwtFromRequest(request);
        String accessToken = getJwtFromCookies(request, "accessToken");
        String refreshToken = getJwtFromCookies(request, "refreshToken");
        String requestURI = request.getRequestURI();
        if (requestURI.equals("/auth/signin") || requestURI.equals("/auth/register")) {
            filterChain.doFilter(request, response);
            return;
        }

//
        if (accessToken != null && jwtTokenProvider.validateToken(accessToken)) {
            String username = jwtTokenProvider.getUsernameFromJwt(accessToken);
            UserWrapper userWrapper = (UserWrapper) customUserDetailsService.loadUserByUsername(username);
            if (userWrapper != null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userWrapper, null, userWrapper.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } else if(refreshToken != null && jwtTokenProvider.validateToken(refreshToken)) {
            String newAccessToken = refreshAccessToken(refreshToken);
            String username = jwtTokenProvider.getUsernameFromJwt(newAccessToken);
            UserWrapper userWrapper = (UserWrapper) customUserDetailsService.loadUserByUsername(username);
            if (userWrapper != null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userWrapper, null, userWrapper.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            Cookie cookie = new Cookie("accessToken", newAccessToken);
            cookie.setHttpOnly(true);
            cookie.setPath("/");
            cookie.setMaxAge(24 * 60 * 60); // czas życia ciasteczka w sekundach (1 dzień)
            response.addCookie(cookie);
        } else {
            // Brak ważnych tokenów - ustawienie odpowiedzi na 401 Unauthorized
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
//        } else if (refreshToken != null && jwtTokenProvider.validateToken(refreshToken)) {
//            String newAccessToken = refreshAccessToken(refreshToken);
//            if (newAccessToken != null) {
//                // Zaktualizuj ciasteczko z nowym accessToken
//                Cookie cookie = new Cookie("accessToken", newAccessToken);
//                cookie.setHttpOnly(true);
//                cookie.setSecure(true);
//                cookie.setPath("/");
//                cookie.setMaxAge(24 * 60 * 60); // czas życia ciasteczka w sekundach (1 dzień)
//                response.addCookie(cookie);
//            }
//
//            filterChain.doFilter(request, response);
//
//        }
//    }
        filterChain.doFilter(request, response);
    }
}
