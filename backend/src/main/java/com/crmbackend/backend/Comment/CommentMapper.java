package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {

    public CommentDTOResponse mapEntityToDTO(CommentModel commentModel) {
        return CommentDTOResponse.builder()
                .id(commentModel.getId())
                .createdTime(commentModel.getCreatedTime())
                .description(commentModel.getDescription())
                .taskId(commentModel.getTaskModel().getId())
                .authorUsername(commentModel.getUserModel().getUsername())
                .build();
    }
}
