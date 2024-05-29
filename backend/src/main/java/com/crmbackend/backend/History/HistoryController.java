package com.crmbackend.backend.History;

import com.crmbackend.backend.History.dto.HistoryDTORequest;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import com.crmbackend.backend.utils.MessageResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/history")
public class HistoryController {

    private final HistoryService historyService;

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<HistoryDTOResponse>> getAllHistory() {
        return ResponseEntity.ok(historyService.getAllHistory());
    }

    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<MessageResponse> addHistory(@RequestBody HistoryDTORequest historyDTORequest) {
        historyService.addHistory(historyDTORequest);
        return ResponseEntity.ok(new MessageResponse("Successfully added history!"));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<MessageResponse> deleteHistory(@PathVariable("id") Long id) {
        historyService.deleteHistory(id);
        return ResponseEntity.ok(new MessageResponse("Successfully deleted history!"));
    }
}
