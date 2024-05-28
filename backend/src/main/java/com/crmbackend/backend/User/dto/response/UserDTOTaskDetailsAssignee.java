package com.crmbackend.backend.User.dto.response;

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
}
