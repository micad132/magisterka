package com.crmbackend.backend.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Response2FA {
    private String qrURL;
    private String message;
}
