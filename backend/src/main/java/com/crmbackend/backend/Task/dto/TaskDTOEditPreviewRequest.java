package com.crmbackend.backend.Task.dto;

import com.crmbackend.backend.Task.TaskPriority;
import com.crmbackend.backend.Task.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTOEditPreviewRequest {
    private Long id;
    private Long assigneeId;
    private TaskPriority taskPriority;
    private TaskStatus taskStatus;
    private Double hoursSpent;
    private String estimatedFinishTime;
}
