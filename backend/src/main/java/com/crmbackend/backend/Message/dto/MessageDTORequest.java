package com.crmbackend.backend.Message.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MessageDTORequest {
    private Long authorId;
    private Long receiverId;
    private String text;
}
