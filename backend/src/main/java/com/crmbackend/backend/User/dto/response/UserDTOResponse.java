package com.crmbackend.backend.User.dto.response;

import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import com.crmbackend.backend.SupportRequest.SupportRequestModel;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestResponse;
import com.crmbackend.backend.Survey.dto.SurveyDTOResponse;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import com.crmbackend.backend.User.enums.UserGender;
import com.crmbackend.backend.User.enums.UserRole;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
@Setter
public class UserDTOResponse {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private String pesel;
    private String email;
    private String countryName;
    private String cityName;
    private String streetName;
    private String postalCode;
    private String phoneNumber;
    private Integer age;
    private UserGender userGender;
    private UserRole userRole;
    private LocalDateTime createdAccountDate;
    private List<MessageDTOResponse> messages;
    private List<CommentDTOResponse> comments;
    private List<StatDTOResponse> stats;
    private List<SupportRequestResponse> supportRequestModels;
    private List<SurveyDTOResponse> surveys;
    private List<HistoryDTOResponse> histories;
    private List<TaskDTOResponse> createdTasks;
    private List<TaskDTOResponse> assignedTasks;
}
