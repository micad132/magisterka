package com.crmbackend.backend.Task;

import com.crmbackend.backend.Task.dto.TaskDTOEditPreviewRequest;
import com.crmbackend.backend.Task.dto.TaskDTORequest;
import com.crmbackend.backend.Task.dto.TaskDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
@AllArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<TaskDTOResponse>> getAllTasks() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }

    @PostMapping
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('CLIENT'))")
    public ResponseEntity<String> addTask(@RequestBody TaskDTORequest taskDTORequest) {
        taskService.addTask(taskDTORequest);
        return ResponseEntity.ok("Successfully added!");
    }

    @PatchMapping("/editPreview")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('WORKER'))")
    public ResponseEntity<String> editPreviewTask(@RequestBody TaskDTOEditPreviewRequest taskDTOEditPreviewRequest) {
        taskService.editPreview(taskDTOEditPreviewRequest);
        return ResponseEntity.ok("Successfully edited preview!");
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok("Successfully deleted task!");
    }

}
