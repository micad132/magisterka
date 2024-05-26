package com.crmbackend.backend.Survey;

import com.crmbackend.backend.Survey.dto.SurveyDTORequest;
import com.crmbackend.backend.Survey.dto.SurveyDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final SurveyMapper surveyMapper;

    public void addSurvey(SurveyDTORequest surveyDTORequest) {
        SurveyModel surveyModel = surveyMapper.mapDTOToEntity(surveyDTORequest);
        surveyRepository.save(surveyModel);
    }

    public List<SurveyDTOResponse> getAllSurveys() {
        return surveyRepository.findAll().stream().map(surveyMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void deleteSurvey(Long id) {
        surveyRepository.deleteById(id);
    }
}
