package com.crmbackend.backend.SupportRequest.dto;

import com.crmbackend.backend.SupportRequest.SupportCategory;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class SupportRequestResponse {
    private String description;
    private LocalDateTime dateTime;
    private SupportCategory supportCategory;
    private String username;
}
