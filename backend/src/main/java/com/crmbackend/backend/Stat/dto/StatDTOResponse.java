package com.crmbackend.backend.Stat.dto;

import com.crmbackend.backend.Stat.StatCategory;
import com.crmbackend.backend.Stat.StatType;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatDTOResponse {
    private Long id;
    private String chartData;
    private LocalDateTime createdTime;
    private String creatorUsername;
    private UserRole userRole;
    private StatType statType;
    private StatCategory statCategory;
}
