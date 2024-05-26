package com.crmbackend.backend.Message;

import com.crmbackend.backend.Message.dto.MessageDTORequest;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/message")
@AllArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @GetMapping
    public ResponseEntity<List<MessageDTOResponse>> getAllMessages() {
        return ResponseEntity.ok(messageService.getAllMessages());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMessage(@PathVariable("id") Long id) {
        messageService.deleteMessage(id);
        return ResponseEntity.ok("Successfully deleted message!");
    }

    @PostMapping
    public ResponseEntity<String> addMessage(@RequestBody MessageDTORequest messageDTORequest) {
        messageService.addMessage(messageDTORequest);
        return ResponseEntity.ok("Successfully added message!");
    }


}
