package com.crmbackend.backend.Task;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
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

    @OneToMany(mappedBy = "taskModel", orphanRemoval = true)
    private List<CommentModel> commentModels = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "assignee_user_id")
    private UserModel assigneeUser;

    @ManyToOne
    @JoinColumn(name = "creator_user_id")
    private UserModel creatorUser;

    @Enumerated(EnumType.STRING)
    @Column(name = "task_status")
    private TaskStatus taskStatus;

}
