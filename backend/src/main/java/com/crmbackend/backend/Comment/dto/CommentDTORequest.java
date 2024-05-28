package com.crmbackend.backend.Comment.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CommentDTORequest {
    private String description;
    private Long authorId;
    private Long taskId;
}
