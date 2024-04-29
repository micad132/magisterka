package com.crmbackend.backend.User;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "user_model")
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

}
