package com.crmbackend.backend.Stat;

import com.crmbackend.backend.User.UserModel;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stat_model")
public class StatModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "created_time")
    private LocalDateTime createdTime;

    @Column(name = "chart_data", length = 2500)
    private String chartData;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @Enumerated(EnumType.STRING)
    @Column(name = "stat_type")
    private StatType statType;

    @Enumerated(EnumType.STRING)
    @Column(name = "stat_category")
    private StatCategory statCategory;

    @Column(name = "description")
    private String description;

}
