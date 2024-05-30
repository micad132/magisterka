package com.crmbackend.backend.Message.dto;

import com.crmbackend.backend.User.enums.UserRole;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class MessageDTOResponse {
    private Long id;
    private String authorName;
    private String authorSurname;
    private String receiverName;
    private String authorUsername;
    private String receiverUsername;
    private String receiverSurname;
    private String text;
    private LocalDateTime date;
    private UserRole authorRole;
    private UserRole receiverRole;
}
