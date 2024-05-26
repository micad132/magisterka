package com.crmbackend.backend.Survey;

import com.crmbackend.backend.Survey.dto.SurveyDTORequest;
import com.crmbackend.backend.Survey.dto.SurveyDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class SurveyMapper {

    private final UserRepository userRepository;

    public SurveyModel mapDTOToEntity(SurveyDTORequest surveyDTORequest) {
        UserModel userModel = userRepository.findById(surveyDTORequest.getAuthorId()).orElseThrow();
        return SurveyModel.builder()
                .description(surveyDTORequest.getDescription())
                .rate(surveyDTORequest.getRate())
                .userModel(userModel)
                .createdDate(LocalDateTime.now())
                .build();
    }

    public SurveyDTOResponse mapEntityToDTO(SurveyModel surveyModel) {
        return SurveyDTOResponse.builder()
                .id(surveyModel.getId())
                .authorSurname(surveyModel.getUserModel().getSurname())
                .authorName(surveyModel.getUserModel().getName())
                .authorUsername(surveyModel.getUserModel().getUsername())
                .createdTime(surveyModel.getCreatedDate())
                .rate(surveyModel.getRate())
                .description(surveyModel.getDescription())
                .build();
    }
}
