//package com.crmbackend.backend.Config;
//
//import com.crmbackend.backend.exceptions.CustomAuthenticationException;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//import org.springframework.stereotype.Component;
//
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Component
//public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {
//
//    @Override
//    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
//        try {
//            throw new CustomAuthenticationException("Login failed");
//        } catch (CustomAuthenticationException e) {
//            throw new RuntimeException(e);
//        }
//    }
//}
