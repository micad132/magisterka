package com.crmbackend.backend.Survey.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SurveyDTORequest {
    private String description;
    private Long authorId;
    private Double rate;
}
