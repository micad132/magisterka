package com.crmbackend.backend.SupportRequest.dto;

import com.crmbackend.backend.SupportRequest.SupportCategory;
import lombok.Builder;

@Builder
public class SupportRequestRequest {
    private String description;
    private Long userId;
    private SupportCategory supportCategory;
}
