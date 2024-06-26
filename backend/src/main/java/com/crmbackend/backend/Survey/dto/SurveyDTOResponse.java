package com.crmbackend.backend.Survey.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SurveyDTOResponse {
    private Long id;
    private Double taskRate;
    private Double messageRate;
    private Double supportRate;
    private LocalDateTime createdTime;
    private String authorName;
    private String authorSurname;
    private String authorUsername;
}
