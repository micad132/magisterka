package com.crmbackend.backend.User.dto.response;


import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTOTaskDetailsCreator {
    private String creatorUsername;
    private Integer creatorAge;
    private String creatorCountry;
    private String creatorName;
    private String creatorSurname;
}
