package com.crmbackend.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;
import java.util.List;


@Configuration
public class SecurityConfig {


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();

        corsConfiguration.applyPermitDefaultValues();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(Collections.singletonList("http://localhost:5173"));
        corsConfiguration.setAllowedMethods(List.of("POST", "GET", "PATCH", "DELETE", "PUT", "OPTIONS", "HEAD"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return source;
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider(UserDetailsService service, PasswordEncoder encoder) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        provider.setUserDetailsService(service);
        provider.setPasswordEncoder(encoder);

        return provider;
    }

    @Bean
    public AuthenticationFailureHandler authenticationFailureHandler() {
        return new CustomAuthenticationFailureHandler();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public UsernamePasswordAuthenticationFilter getUserPasswordAuthentication(AuthenticationManager authenticationManager) {
        UsernamePasswordAuthenticationFilter filter = new UsernamePasswordAuthenticationFilter();

        filter.setAuthenticationManager(authenticationManager);

        return filter;
    }


    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity httpSecurity,
            CorsConfigurationSource corsConfigurationSource
    ) throws Exception {
        httpSecurity
                .csrf()
                .disable()
                .cors().configurationSource(corsConfigurationSource)
                .and()
                .headers()
                .frameOptions().disable()
                .and()
                .authorizeRequests()
                .antMatchers("/login")
                .permitAll()
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .failureHandler(authenticationFailureHandler())
                .loginProcessingUrl("/login")
                .failureUrl("http://localhost:5173/failed")
                .defaultSuccessUrl("http://localhost:5173")
                .loginPage("http://localhost:5173/login")
                .permitAll();

        httpSecurity.logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("http://localhost:5173")
                .deleteCookies("JSESSIONID")
                .invalidateHttpSession(true)
                .clearAuthentication(true);

//        httpSecurity.cors().configurationSource(corsConfigurationSource);

        return httpSecurity.build();
    }

}
