package com.crmbackend.backend.History;

import com.crmbackend.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "history_model")
public class HistoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_model_id")
    private UserModel userModel;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "history_action_type")
    private HistoryActionType historyActionType;

    @Column(name = "description")
    private String description;

}
