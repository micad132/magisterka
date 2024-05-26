package com.crmbackend.backend.SupportRequest.dto;

import com.crmbackend.backend.SupportRequest.SupportCategory;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SupportRequestEditRequest {
    private Long id;
    private String description;
    private Long userId;
    private SupportCategory supportCategory;
}
