package com.crmbackend.backend.Stat;

import com.crmbackend.backend.Stat.dto.StatDTORequest;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import com.crmbackend.backend.utils.MessageResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/stat")
public class StatController {

    private final StatService statService;

    @PostMapping
    public ResponseEntity<MessageResponse> addStat(@RequestBody StatDTORequest statDTORequest) {
        statService.addStat(statDTORequest);
        return ResponseEntity.ok(new MessageResponse("Successfully added new stat!"));
    }

    @GetMapping
    public ResponseEntity<List<StatDTOResponse>> getAllStats() {
        return ResponseEntity.ok(statService.getAllStats());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteStat(@PathVariable("id") Long id) {
        statService.deleteStat(id);
        return ResponseEntity.ok(new MessageResponse("Successfully deleted stat!"));
    }

}
