package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Task.TaskModel;
import com.crmbackend.backend.User.UserModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "comment_model")
public class CommentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @Column(name = "description")
    private String description;

    @Column(name = "created_time")
    private LocalDateTime createdTime;

    @ManyToOne
    @JoinColumn(name = "task_model_id")
    private TaskModel taskModel;

}
