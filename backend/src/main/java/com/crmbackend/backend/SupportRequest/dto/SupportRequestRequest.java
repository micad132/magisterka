package com.crmbackend.backend.SupportRequest.dto;

import com.crmbackend.backend.SupportRequest.SupportCategory;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SupportRequestRequest {
    private String description;
    private Long userId;
    private SupportCategory supportCategory;
}
