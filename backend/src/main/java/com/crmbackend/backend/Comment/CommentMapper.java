package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.Task.TaskModel;
import com.crmbackend.backend.Task.TaskRepository;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class CommentMapper {

    private final UserRepository userRepository;
    private final TaskRepository taskRepository;

    public CommentDTOResponse mapEntityToDTO(CommentModel commentModel) {
        return CommentDTOResponse.builder()
                .id(commentModel.getId())
                .createdTime(commentModel.getCreatedTime())
                .description(commentModel.getDescription())
                .taskId(commentModel.getTaskModel().getId())
                .authorUsername(commentModel.getUserModel().getUsername())
                .authorName(commentModel.getUserModel().getName())
                .authorSurname(commentModel.getUserModel().getSurname())
                .authorRole(commentModel.getUserModel().getUserRole())
                .build();
    }

    public CommentModel mapDTOToEntity(CommentDTORequest commentDTORequest) {
        UserModel userModel = userRepository.findById(commentDTORequest.getAuthorId()).orElseThrow();
        TaskModel taskModel = taskRepository.findById(commentDTORequest.getTaskId()).orElseThrow();

        return CommentModel.builder()
                .description(commentDTORequest.getDescription())
                .createdTime(LocalDateTime.now())
                .taskModel(taskModel)
                .userModel(userModel)
                .build();
    }
}
