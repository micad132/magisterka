package com.crmbackend.backend.User.dto.response;

import com.crmbackend.backend.User.enums.UserGender;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class UserDTOResponse {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private String pesel;
    private String email;
    private String countryName;
    private String cityName;
    private String streetName;
    private String postalCode;
    private String phoneNumber;
    private Integer age;
    private UserGender userGender;
    private UserRole userRole;
    private LocalDateTime createdAccountDate;
}
