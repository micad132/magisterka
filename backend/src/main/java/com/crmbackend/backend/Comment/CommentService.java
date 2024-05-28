package com.crmbackend.backend.Comment;

import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;

    public void addComment(CommentDTORequest commentDTORequest) {
        CommentModel commentModel = commentMapper.mapDTOToEntity(commentDTORequest);
        commentRepository.save(commentModel);
    }

    public List<CommentDTOResponse> getAllComments() {
        return commentRepository.findAll().stream().map(commentMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}
