package com.crmbackend.backend.Stat;

import com.crmbackend.backend.Stat.dto.StatDTORequest;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class StatMapper {

    private final UserRepository userRepository;
    public StatModel mapDTOToEntity(StatDTORequest statDTORequest) {
        UserModel userModel = userRepository.findById(statDTORequest.getCreatorId()).orElseThrow();
        return StatModel.builder()
                .createdTime(LocalDateTime.now())
                .chartData(statDTORequest.getChartData())
                .userModel(userModel)
                .statType(statDTORequest.getStatType())
                .statCategory(statDTORequest.getStatCategory())
                .description(statDTORequest.getDescription())
                .build();
    }

    public StatDTOResponse mapEntityToDTO(StatModel statModel) {
        return StatDTOResponse.builder()
                .id(statModel.getId())
                .createdTime(statModel.getCreatedTime())
                .chartData(String.valueOf(statModel.getChartData()))
                .creatorUsername(statModel.getUserModel().getUsername())
                .userRole(statModel.getUserModel().getUserRole())
                .statCategory(statModel.getStatCategory())
                .statType(statModel.getStatType())
                .description(statModel.getDescription())
                .build();
    }
}
