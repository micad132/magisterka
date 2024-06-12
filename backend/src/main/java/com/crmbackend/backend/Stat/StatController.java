package com.crmbackend.backend.Stat;

import com.crmbackend.backend.Stat.dto.StatDTORequest;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import com.crmbackend.backend.utils.MessageResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/stat")
public class StatController {

    private final StatService statService;

    @PostMapping
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<MessageResponse> addStat(@RequestBody StatDTORequest statDTORequest) {
        statService.addStat(statDTORequest);
        return ResponseEntity.ok(new MessageResponse("Successfully added new stat!"));
    }

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<StatDTOResponse>> getAllStats() {
        return ResponseEntity.ok(statService.getAllStats());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<MessageResponse> deleteStat(@PathVariable("id") Long id) {
        statService.deleteStat(id);
        return ResponseEntity.ok(new MessageResponse("Successfully deleted stat!"));
    }

}
