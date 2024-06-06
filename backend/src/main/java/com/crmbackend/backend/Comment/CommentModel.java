package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Task.TaskModel;
import com.crmbackend.backend.User.UserModel;
import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "comment_model")
public class CommentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;



    @Column(name = "description")
    private String description;

    @Column(name = "created_time")
    private LocalDateTime createdTime;

    @ManyToOne
    @JoinColumn(name = "task_model_id")
    private TaskModel taskModel;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

}
