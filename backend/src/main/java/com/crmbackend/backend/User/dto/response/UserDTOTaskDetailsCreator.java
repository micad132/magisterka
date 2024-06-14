package com.crmbackend.backend.User.dto.response;


import com.crmbackend.backend.User.enums.UserRole;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTOTaskDetailsCreator {
    private String creatorUsername;
    private Integer creatorAge;
    private String creatorProvince;
    private String creatorName;
    private String creatorSurname;
    private UserRole creatorRole;
}
