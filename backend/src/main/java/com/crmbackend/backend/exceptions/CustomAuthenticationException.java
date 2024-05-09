package com.crmbackend.backend.exceptions;

import javax.naming.AuthenticationException;

public class CustomAuthenticationException extends AuthenticationException {

    public CustomAuthenticationException(String msg) {
        super(msg);
    }
}
