package com.crmbackend.backend.User.dto.request;

import com.crmbackend.backend.User.enums.UserGender;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTORequest {
    private String name;
    private String surname;
    private String password;
    private String username;
    private String pesel;
    private String email;
    private String provinceName;
    private String cityName;
    private String streetName;
    private String postalCode;
    private String phoneNumber;
    private Integer age;
    private UserGender userGender;
    private UserRole userRole;
}
