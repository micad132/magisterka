package com.crmbackend.backend.Task.dto;

import com.crmbackend.backend.Task.enums.TaskOrigin;
import com.crmbackend.backend.Task.enums.TaskPriority;
import com.crmbackend.backend.Task.enums.TaskStatus;
import com.crmbackend.backend.Task.enums.TaskType;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class TaskDTORequest {
    private String description;
    private TaskType taskType;
    private TaskPriority taskPriority;
    private TaskStatus taskStatus;
    private TaskOrigin taskOrigin;
    private String estimatedFinishTime;
    private Double estimatedCost;
    private Long creatorId;
    private Long assigneeId;

}
