package com.crmbackend.backend.Task.dto;

import com.crmbackend.backend.Task.enums.TaskPriority;
import com.crmbackend.backend.Task.enums.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    private Double actualCost;
}
