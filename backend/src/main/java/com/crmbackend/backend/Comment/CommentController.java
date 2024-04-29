package com.crmbackend.backend.Comment;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class CommentController {

    private final CommentService commentService;
}
