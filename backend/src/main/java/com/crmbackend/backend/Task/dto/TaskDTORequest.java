package com.crmbackend.backend.Task.dto;

import com.crmbackend.backend.Task.TaskPriority;
import com.crmbackend.backend.Task.TaskStatus;
import com.crmbackend.backend.Task.TaskType;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class TaskDTORequest {
    private String description;
    private TaskType taskType;
    private TaskPriority taskPriority;
    private TaskStatus taskStatus;
    private String estimatedFinishTime;
    private Double estimatedCost;
    private Long creatorId;

}
