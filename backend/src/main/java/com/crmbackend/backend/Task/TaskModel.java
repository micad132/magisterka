package com.crmbackend.backend.Task;

import com.crmbackend.backend.Comment.CommentModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
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

    @OneToMany(mappedBy = "taskModel", orphanRemoval = true)
    private List<CommentModel> commentModels = new ArrayList<>();

}
