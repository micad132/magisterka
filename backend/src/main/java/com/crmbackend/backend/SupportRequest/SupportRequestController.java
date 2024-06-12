package com.crmbackend.backend.SupportRequest;

import com.crmbackend.backend.SupportRequest.dto.SupportRequestEditRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/support")
public class SupportRequestController {

    private final SupportRequestService supportRequestService;

    @PostMapping
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('CLIENT'))")
    public ResponseEntity<String> addSupportRequest(@RequestBody SupportRequestRequest supportRequestRequest) {
        supportRequestService.addSupportRequest(supportRequestRequest);
        return ResponseEntity.ok("Support request successfully added!");
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<String> deleteSupportRequest(@PathVariable("id") Long id) {
        supportRequestService.deleteSupportRequest(id);
        return ResponseEntity.ok("Support request successfully deleted!");
    }

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<SupportRequestResponse>> getAllSupportRequests() {
        List<SupportRequestResponse> supportRequestResponses = supportRequestService.getAllSupportRequests();
        return ResponseEntity.ok(supportRequestResponses);
    }

    @PutMapping
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('WORKER'))")
    public ResponseEntity<String> editSupportRequest(@RequestBody SupportRequestEditRequest supportRequestEditRequest) {
        supportRequestService.editSupportRequest(supportRequestEditRequest);
        return ResponseEntity.ok("Support request successfully edited!");
    }

}
