package com.crmbackend.backend.History.dto;

import com.crmbackend.backend.History.HistoryActionType;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HistoryDTOResponse {
    private Long id;
    private String description;
    private LocalDateTime createdTime;
    private HistoryActionType historyActionType;
    private String performerUsername;
}
