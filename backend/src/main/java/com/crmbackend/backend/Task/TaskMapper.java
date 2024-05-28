package com.crmbackend.backend.Task;

import com.crmbackend.backend.Comment.CommentMapper;
import com.crmbackend.backend.Task.dto.TaskDTORequest;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsAssignee;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsCreator;
import com.crmbackend.backend.mappers.UserMapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class TaskMapper {

    private final CommentMapper commentMapper;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    public TaskDTOResponse mapEntityToDTO(TaskModel taskModel) {
        return TaskDTOResponse.builder()
                .id(taskModel.getId())
                .description(taskModel.getDescription())
                .taskPriority(taskModel.getTaskPriority())
                .taskStatus(taskModel.getTaskStatus())
                .taskType(taskModel.getTaskType())
                .userDTOTaskDetailsAssignee(Optional.ofNullable(taskModel.getAssigneeUser()).map(userMapper::mapEntityToUserDetailsAssignee).orElse(new UserDTOTaskDetailsAssignee()))
                .userDTOTaskDetailsCreator(Optional.ofNullable(taskModel.getCreatorUser()).map(userMapper::mapEntityToUserDetailsCreator).orElse(new UserDTOTaskDetailsCreator()))
                .cost(taskModel.getCost())
                .estimatedCost(taskModel.getEstimatedCost())
                .estimationFinishTime(taskModel.getEstimationFinishTime())
                .creationDate(taskModel.getCreationDate())
                .hoursSpent(taskModel.getHoursSpent())
                .comments(taskModel.getCommentModels().stream().map(commentMapper::mapEntityToDTO).collect(Collectors.toList()))
                .build();

    }

    public TaskModel mapDTOToEntity(TaskDTORequest taskDTORequest) {
        UserModel userModel = userRepository.findById(taskDTORequest.getCreatorId()).orElseThrow();
        LocalDateTime localDateTime = LocalDateTime.parse(taskDTORequest.getEstimatedFinishTime());
        return TaskModel.builder()
                .description(taskDTORequest.getDescription())
                .cost(0.0)
                .assigneeUser(null)
                .creationDate(LocalDateTime.now())
                .taskType(taskDTORequest.getTaskType())
                .taskPriority(taskDTORequest.getTaskPriority())
                .taskStatus(taskDTORequest.getTaskStatus())
                .hoursSpent(0.0)
                .creatorUser(userModel)
                .estimatedCost(taskDTORequest.getEstimatedCost())
                .commentModels(new ArrayList<>())
                .estimationFinishTime(localDateTime)
                .build();
    }
}
