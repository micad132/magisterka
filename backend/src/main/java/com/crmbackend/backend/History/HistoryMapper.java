package com.crmbackend.backend.History;

import com.crmbackend.backend.History.dto.HistoryDTORequest;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class HistoryMapper {

    private final UserRepository userRepository;
    public HistoryModel mapDTOToEntity(HistoryDTORequest historyDTORequest) {
        UserModel userModel = userRepository.findById(historyDTORequest.getPerformerId()).orElseThrow();
        return HistoryModel.builder()
                .description(historyDTORequest.getDescription())
                .createdDate(LocalDateTime.now())
                .historyActionType(historyDTORequest.getHistoryActionType())
                .userModel(userModel)
                .build();
    }

    public HistoryDTOResponse mapEntityToDTO(HistoryModel historyModel) {
        return HistoryDTOResponse.builder()
                .description(historyModel.getDescription())
                .id(historyModel.getId())
                .historyActionType(historyModel.getHistoryActionType())
                .createdTime(historyModel.getCreatedDate())
                .performerUsername(historyModel.getUserModel().getUsername())
                .build();
    }
}
