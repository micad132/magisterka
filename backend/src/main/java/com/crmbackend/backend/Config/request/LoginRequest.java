package com.crmbackend.backend.Config.request;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String username;
    private String password;
    private String code2FA;
}
