package com.crmbackend.backend.Survey;

import com.crmbackend.backend.Survey.dto.SurveyDTORequest;
import com.crmbackend.backend.Survey.dto.SurveyDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/survey")
public class SurveyController {

    private final SurveyService surveyService;

    @GetMapping
    public ResponseEntity<List<SurveyDTOResponse>> getAllSurveys() {
        return ResponseEntity.ok(surveyService.getAllSurveys());
    }

    @PostMapping
    public ResponseEntity<String> addSurvey(@RequestBody SurveyDTORequest surveyDTORequest) {
        surveyService.addSurvey(surveyDTORequest);
        return ResponseEntity.ok("Successfully added survey!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSurvey(@PathVariable("id") Long id) {
        surveyService.deleteSurvey(id);
        return ResponseEntity.ok("Successfully deleted survey!");
    }
}
