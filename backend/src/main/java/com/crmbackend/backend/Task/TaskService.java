package com.crmbackend.backend.Task;

import com.crmbackend.backend.Task.dto.TaskDTOEditPreviewRequest;
import com.crmbackend.backend.Task.dto.TaskDTORequest;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    private final TaskMapper taskMapper;
    private final UserRepository userRepository;

    public List<TaskDTOResponse> getAllTasks() {
        return taskRepository.findAll().stream().map(taskMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void addTask(TaskDTORequest taskDTORequest) {
        TaskModel taskModel = taskMapper.mapDTOToEntity(taskDTORequest);
        taskRepository.save(taskModel);
    }

    public void editPreview(TaskDTOEditPreviewRequest taskDTOEditPreviewRequest) {
        TaskModel taskModel = taskRepository.findById(taskDTOEditPreviewRequest.getId()).orElseThrow();
        UserModel userModel = userRepository.findById(taskDTOEditPreviewRequest.getAssigneeId()).orElseThrow();
        taskModel.setAssigneeUser(userModel);
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
