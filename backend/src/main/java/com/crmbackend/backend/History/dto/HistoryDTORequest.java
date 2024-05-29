package com.crmbackend.backend.History.dto;

import com.crmbackend.backend.History.HistoryActionType;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class HistoryDTORequest {
    private String description;
    private HistoryActionType historyActionType;
    private Long performerId;
}
