package com.crmbackend.backend.User;

import com.crmbackend.backend.Comment.CommentMapper;
import com.crmbackend.backend.Config.PasswordEncoderConfig;
import com.crmbackend.backend.History.HistoryMapper;
import com.crmbackend.backend.Message.mappers.MessageMapper;
import com.crmbackend.backend.SupportRequest.mappers.SupportMapper;
import com.crmbackend.backend.Survey.SurveyMapper;
import com.crmbackend.backend.Task.TaskMapper;
import com.crmbackend.backend.Task.TaskModel;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsAssignee;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsCreator;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class UserMapper {

    private final PasswordEncoder passwordEncoder;
    private final CommentMapper commentMapper;
    private final SurveyMapper surveyMapper;
    private final MessageMapper messageMapper;
    private final HistoryMapper historyMapper;
    private final SupportMapper supportMapper;
    public UserModel mapUserDTOToEntity(UserDTORequest userDTORequest) {
        return UserModel.builder()
                .name(userDTORequest.getName())
                .surname(userDTORequest.getSurname())
                .age(userDTORequest.getAge())
                .username(userDTORequest.getUsername())
                .pesel(userDTORequest.getPesel())
                .userGender(userDTORequest.getUserGender())
                .email(userDTORequest.getEmail())
                .userRole(userDTORequest.getUserRole())
                .provinceName(userDTORequest.getProvinceName())
                .streetName(userDTORequest.getStreetName())
                .cityName(userDTORequest.getCityName())
                .phoneNumber(userDTORequest.getPhoneNumber())
                .postalCode(userDTORequest.getPostalCode())
                .password(passwordEncoder.encode(userDTORequest.getPassword()))
                .createdAccountDate(LocalDateTime.now())
                .build();
    }

    public UserDTOResponse mapEntityToDTO(UserModel userModel) {
        return UserDTOResponse.builder()
                .id(userModel.getId())
                .name(userModel.getName())
                .surname(userModel.getSurname())
                .age(userModel.getAge())
                .username(userModel.getUsername())
                .userGender(userModel.getUserGender())
                .pesel(userModel.getPesel())
                .provinceName(userModel.getProvinceName())
                .streetName(userModel.getStreetName())
                .cityName(userModel.getCityName())
                .phoneNumber(userModel.getPhoneNumber())
                .userRole(userModel.getUserRole())
                .postalCode(userModel.getPostalCode())
                .email(userModel.getEmail())
                .createdAccountDate(userModel.getCreatedAccountDate())
                .comments(userModel.getCommentModels().stream().map(commentMapper::mapEntityToDTO).collect(Collectors.toList()))
                .surveys(userModel.getSurveyModels().stream().map(surveyMapper::mapEntityToDTO).collect(Collectors.toList()))
                .messages(userModel.getAuthorMessageModels().stream().map(messageMapper::mapEntityToDTO).collect(Collectors.toList()))
                .createdTasks(userModel.getCreatedTaskModels().stream().map(this::mapEntityToDTO).collect(Collectors.toList()))
                .assignedTasks(userModel.getAssignedTaskModels().stream().map(this::mapEntityToDTO).collect(Collectors.toList()))
                .histories(userModel.getHistoryModels().stream().map(historyMapper::mapEntityToDTO).collect(Collectors.toList()))
                .supportRequestModels(userModel.getSupportRequestModels().stream().map(supportMapper::mapEntityToDTO).collect(Collectors.toList()))
                .build();
    }

    public UserDTOTaskDetailsAssignee mapEntityToUserDetailsAssignee(UserModel userModel) {
        return UserDTOTaskDetailsAssignee.builder()
                .assigneeUsername(userModel.getUsername())
                .assigneeProvince(userModel.getProvinceName())
                .assigneeSurname(userModel.getSurname())
                .assigneeName(userModel.getName())
                .assigneeAge(userModel.getAge())
                .assigneeRole(userModel.getUserRole())
                .build();
    }

    public UserDTOTaskDetailsCreator mapEntityToUserDetailsCreator(UserModel userModel) {
        return UserDTOTaskDetailsCreator.builder()
                .creatorUsername(userModel.getUsername())
                .creatorName(userModel.getName())
                .creatorSurname(userModel.getSurname())
                .creatorAge(userModel.getAge())
                .creatorProvince(userModel.getProvinceName())
                .creatorRole(userModel.getUserRole())
                .build();
    }

    public TaskDTOResponse mapEntityToDTO(TaskModel taskModel) {
        return TaskDTOResponse.builder()
                .id(taskModel.getId())
                .description(taskModel.getDescription())
                .taskPriority(taskModel.getTaskPriority())
                .taskStatus(taskModel.getTaskStatus())
                .taskType(taskModel.getTaskType())
                .taskOrigin(taskModel.getTaskOrigin())
                .userDTOTaskDetailsAssignee(Optional.ofNullable(taskModel.getAssigneeModel()).map(this::mapEntityToUserDetailsAssignee).orElse(new UserDTOTaskDetailsAssignee()))
                .userDTOTaskDetailsCreator(Optional.ofNullable(taskModel.getCreatorModel()).map(this::mapEntityToUserDetailsCreator).orElse(new UserDTOTaskDetailsCreator()))
                .cost(taskModel.getCost())
                .estimatedCost(taskModel.getEstimatedCost())
                .estimationFinishTime(taskModel.getEstimationFinishTime())
                .creationDate(taskModel.getCreationDate())
                .hoursSpent(taskModel.getHoursSpent())
                .comments(taskModel.getCommentModels().stream().map(commentMapper::mapEntityToDTO).collect(Collectors.toList()))
                .build();

    }

}
