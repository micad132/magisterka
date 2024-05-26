package com.crmbackend.backend.Message;

import com.crmbackend.backend.User.UserModel;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@Table(name = "message_model")
@AllArgsConstructor
public class MessageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "text")
    private String text;

    @Column(name = "date")
    private LocalDateTime date;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "author_model_id")
    private UserModel authorModel;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "receiver_model_id")
    private UserModel receiverModel;

}
