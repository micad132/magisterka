package com.crmbackend.backend.User;

import com.crmbackend.backend.User.enums.UserGender;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.*;

import javax.persistence.*;

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

}
