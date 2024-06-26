package com.crmbackend.backend.Survey.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SurveyDTORequest {
    private Long authorId;
    private Double taskRate;
    private Double messageRate;
    private Double supportRate;
}
