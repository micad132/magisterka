package com.crmbackend.backend.Task;

import com.crmbackend.backend.Task.dto.TaskDTOEditPreviewRequest;
import com.crmbackend.backend.Task.dto.TaskDTORequest;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import com.crmbackend.backend.Task.enums.TaskStatus;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.UserMapper;
import com.crmbackend.backend.utils.SmsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    private final TaskMapper taskMapper;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private SmsService smsService;

    public List<TaskDTOResponse> getAllTasks() {
        return taskRepository.findAll().stream().map(userMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void addTask(TaskDTORequest taskDTORequest) {
        TaskModel taskModel = taskMapper.mapDTOToEntity(taskDTORequest);
        taskRepository.save(taskModel);
    }

    public void editPreview(TaskDTOEditPreviewRequest taskDTOEditPreviewRequest) {
        TaskModel taskModel = taskRepository.findById(taskDTOEditPreviewRequest.getId()).orElseThrow();
        UserModel userModel = userRepository.findById(taskDTOEditPreviewRequest.getAssigneeId()).orElseThrow();
        UserModel creatorModel = taskModel.getCreatorModel();
        if(taskDTOEditPreviewRequest.getTaskStatus() == TaskStatus.DONE) {
            smsService.sendSms("+48530079391", "Dear " + creatorModel.getName() + " " + creatorModel.getSurname() +
                    ", your task with id: " + taskModel.getId() + "and type: " + taskModel.getTaskType() + " is done");
        }
        taskModel.setAssigneeModel(userModel);
        taskModel.setTaskPriority(taskDTOEditPreviewRequest.getTaskPriority());
        taskModel.setTaskStatus(taskDTOEditPreviewRequest.getTaskStatus());
        taskModel.setHoursSpent(taskDTOEditPreviewRequest.getHoursSpent());
//        LocalDateTime editedDate = LocalDateTime.parse(taskDTOEditPreviewRequest.getEstimatedFinishTime());
//        taskModel.setEstimationFinishTime(editedDate);
        taskModel.setCost(taskDTOEditPreviewRequest.getActualCost());
        taskRepository.save(taskModel);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
