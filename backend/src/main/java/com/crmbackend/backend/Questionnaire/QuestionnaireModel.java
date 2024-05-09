package com.crmbackend.backend.Questionnaire;

import com.crmbackend.backend.User.UserModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "questionnaire_model")
public class QuestionnaireModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

}
