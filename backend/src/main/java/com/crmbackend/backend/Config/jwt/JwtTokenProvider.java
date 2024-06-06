package com.crmbackend.backend.Config.jwt;

import org.springframework.stereotype.Component;

@Component
public class JwtTokenProvider {

    private final String jwtSecret = "yourSecretKey";
    private final int jwtExpirationInMs = 900000; // 15 minut
    private final int refreshExpirationInMs = 604800000; // 7 dni

    public String generateAccessToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationInMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String generateRefreshToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + refreshExpirationInMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
}
