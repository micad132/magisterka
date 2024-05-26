package com.crmbackend.backend.Comment.dto;

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
    private LocalDateTime createdTime;
    private Long taskId;
}
