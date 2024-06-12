package com.crmbackend.backend.Task;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.Task.enums.TaskOrigin;
import com.crmbackend.backend.Task.enums.TaskPriority;
import com.crmbackend.backend.Task.enums.TaskStatus;
import com.crmbackend.backend.Task.enums.TaskType;
import com.crmbackend.backend.User.UserModel;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "task_model")
public class TaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;

    @Column(name = "estimation_finish_time")
    private LocalDateTime estimationFinishTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "task_type")
    private TaskType taskType;

    @Column(name = "hours_spent")
    private Double hoursSpent;

    @Enumerated(EnumType.STRING)
    @Column(name = "task_priority")
    private TaskPriority taskPriority;

    @Column(name = "estimated_cost")
    private Double estimatedCost;

    @Column(name = "cost")
    private Double cost;

    @OneToMany(mappedBy = "taskModel", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<CommentModel> commentModels = new ArrayList<>();


    @Enumerated(EnumType.STRING)
    @Column(name = "task_status")
    private TaskStatus taskStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "task_origin")
    private TaskOrigin taskOrigin;

    @ManyToOne
    @JoinColumn(name = "creator_model_id")
    private UserModel creatorModel;

    @ManyToOne
    @JoinColumn(name = "assignee_model_id")
    private UserModel assigneeModel;

}
