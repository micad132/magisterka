package com.crmbackend.backend.Survey;

import com.crmbackend.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "survey_model")
public class SurveyModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @Column(name = "taskRate")
    private Double taskRate;



    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Column(name = "message_rate")
    private Double messageRate;

    @Column(name = "support_rate")
    private Double supportRate;

}
