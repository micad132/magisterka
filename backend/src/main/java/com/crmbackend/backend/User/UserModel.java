package com.crmbackend.backend.User;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.SupportRequest.SupportRequestModel;
import com.crmbackend.backend.Survey.SurveyModel;
import com.crmbackend.backend.User.enums.UserGender;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@Table(name = "user_model")
@AllArgsConstructor
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "city_name")
    private String cityName;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role")
    private UserRole userRole;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_gender")
    private UserGender userGender;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "age")
    private Integer age;

    @Column(name = "country_name")
    private String countryName;

    @Column(name = "pesel")
    private String pesel;

    @Column(name = "password")
    private String password;

    @Column(name = "created_account_date")
    private LocalDateTime createdAccountDate;

    @OneToMany(mappedBy = "userModel", orphanRemoval = true)
    private List<SupportRequestModel> supportRequestModels = new ArrayList<>();

    @OneToMany(mappedBy = "userModel", orphanRemoval = true)
    private List<CommentModel> commentModels = new ArrayList<>();

    @OneToMany(mappedBy = "userModel", orphanRemoval = true)
    private List<SurveyModel> surveyModels = new ArrayList<>();

}
