package com.crmbackend.backend.Comment.dto;

import com.crmbackend.backend.User.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTOResponse {
    private Long id;
    private String description;
    private String authorUsername;
    private String authorName;
    private String authorSurname;
    private UserRole authorRole;
    private LocalDateTime createdTime;
    private Long taskId;
}
