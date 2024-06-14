package com.crmbackend.backend.User.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTOEditPersonalInfoRequest {
    private Long id;
    private String username;
    private String name;
    private String surname;
    private Integer age;
    private String provinceName;
    private String cityName;
    private String streetName;
    private String pesel;
    private String email;
    private String phoneNumber;
    private String postalCode;
}
