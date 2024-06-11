package com.crmbackend.backend.User.dto.response;

import com.crmbackend.backend.User.enums.UserRole;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTOTaskDetailsAssignee {
    private String assigneeUsername;
    private Integer assigneeAge;
    private String assigneeCountry;
    private String assigneeName;
    private String assigneeSurname;
    private UserRole assigneeRole;
}
