package com.crmbackend.backend.Stat.dto;

import com.crmbackend.backend.Stat.StatCategory;
import com.crmbackend.backend.Stat.StatType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StatDTORequest {
    private String chartData;
    private Long creatorId;
    private StatCategory statCategory;
    private StatType statType;
}
