package com.crmbackend.backend.SupportRequest;

import com.crmbackend.backend.User.UserModel;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "support_request_model")
public class SupportRequestModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @Column(name = "created_time")
    private LocalDateTime createdTime;

}
