package com.crmbackend.backend.Task.dto;

import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.Task.enums.TaskOrigin;
import com.crmbackend.backend.Task.enums.TaskPriority;
import com.crmbackend.backend.Task.enums.TaskStatus;
import com.crmbackend.backend.Task.enums.TaskType;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsAssignee;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsCreator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TaskDTOResponse {
    private Long id;
    private String description;
    private TaskStatus taskStatus;
    private TaskPriority taskPriority;
    private TaskType taskType;
    private TaskOrigin taskOrigin;
    private LocalDateTime creationDate;
    private LocalDateTime estimationFinishTime;
    private Double hoursSpent;
    private Double estimatedCost;
    private Double cost;
    private UserDTOTaskDetailsCreator userDTOTaskDetailsCreator;
    private UserDTOTaskDetailsAssignee userDTOTaskDetailsAssignee;
    private List<CommentDTOResponse> comments;
}
