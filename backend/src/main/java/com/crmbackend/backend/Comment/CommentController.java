package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RequestMapping("/api/v1/comment")
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<String> addComment(@RequestBody CommentDTORequest commentDTORequest) {
        commentService.addComment(commentDTORequest);
        return ResponseEntity.ok("Successfully added message!");
    }

    @GetMapping
    public ResponseEntity<List<CommentDTOResponse>> getAllComments() {
        return ResponseEntity.ok(commentService.getAllComments());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable("id") Long id) {
        commentService.deleteComment(id);
        return ResponseEntity.ok("Successfully deleted comment!");
    }


}
