package com.crmbackend.backend.SupportRequest;

import com.crmbackend.backend.User.UserModel;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@Table(name = "support_request_model")
@AllArgsConstructor
public class SupportRequestModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description")
    private String description;



    @Column(name = "created_time")
    private LocalDateTime createdTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "support_category")
    private SupportCategory supportCategory;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

}
