package com.crmbackend.backend;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.Survey.SurveyMapper;
import com.crmbackend.backend.Survey.SurveyModel;
import com.crmbackend.backend.Survey.SurveyRepository;
import com.crmbackend.backend.Survey.SurveyService;
import com.crmbackend.backend.Survey.dto.SurveyDTORequest;
import com.crmbackend.backend.Survey.dto.SurveyDTOResponse;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@TestPropertySource(properties = {
        "TWILIO_ACCOUNT_SID=xjs",
        "TWILIO_AUTH_TOKEN=fdsfds",
        "TWILIO_PHONE_NUMBER=+747"
})
public class SurveyServiceTest {

    @Autowired
    private SurveyService surveyService;

    @MockBean
    private SurveyRepository surveyRepository;

    @MockBean
    private SurveyMapper surveyMapper;

    @Test
    void addAndDisplaySurvey() {
        SurveyDTORequest surveyDTORequest = SurveyDTORequest.builder()
                        .authorId(1L)
                        .messageRate(2.3)
                        .supportRate(3.4)
                        .taskRate(2.1)
                         .build();

        surveyService.addSurvey(surveyDTORequest);
        verify(surveyRepository, times(1)).save(surveyMapper.mapDTOToEntity(surveyDTORequest));

        SurveyModel surveyModel = surveyMapper.mapDTOToEntity(surveyDTORequest);
        when(surveyRepository.save(any(SurveyModel.class))).thenReturn(surveyModel);
        when(surveyRepository.findAll()).thenReturn(Collections.singletonList(surveyModel));

        List<SurveyDTOResponse> allSurveys =  surveyService.getAllSurveys();
        assertEquals(1, allSurveys.size());
    }

    @Test
    void deleteSurvey() {
        SurveyDTORequest surveyDTORequest = SurveyDTORequest.builder()
                .authorId(1L)
                .messageRate(2.3)
                .supportRate(3.4)
                .taskRate(2.1)
                .build();

        SurveyModel surveyModel = new SurveyModel();
        surveyModel.setId(1L); // Dodanie ID dla modelu

        // Mockowanie mapowania DTO do encji
        when(surveyMapper.mapDTOToEntity(surveyDTORequest)).thenReturn(surveyModel);

        // Mockowanie zachowania repozytorium przy dodawaniu komentarza
        when(surveyRepository.save(any(SurveyModel.class))).thenReturn(surveyModel);
        when(surveyRepository.findAll()).thenReturn(Collections.singletonList(surveyModel));

        // When - Dodawanie komentarza
        surveyService.addSurvey(surveyDTORequest);

        // Then - Weryfikacja, czy metoda save została wywołana
        verify(surveyRepository, times(1)).save(surveyModel);

        // Then - Weryfikacja, czy komentarz został dodany
        List<SurveyDTOResponse> allSurveys = surveyService.getAllSurveys();
        assertEquals(1, allSurveys.size());

        // When - Usunięcie komentarza
        surveyService.deleteSurvey(surveyModel.getId());

        // Mockowanie zachowania repozytorium przy usuwaniu komentarza
        when(surveyRepository.findAll()).thenReturn(Collections.emptyList());

        // Then - Weryfikacja, czy komentarz został usunięty
        allSurveys = surveyService.getAllSurveys();
        assertEquals(0, allSurveys.size());
    }

}
