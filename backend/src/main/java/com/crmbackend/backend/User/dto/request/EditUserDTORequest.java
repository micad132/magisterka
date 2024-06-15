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
public class EditUserDTORequest {
    private Long id;
    private UserRole userRole;
}
