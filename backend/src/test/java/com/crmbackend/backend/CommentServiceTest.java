package com.crmbackend.backend;

import com.crmbackend.backend.Comment.CommentMapper;
import com.crmbackend.backend.Comment.CommentModel;
import com.crmbackend.backend.Comment.CommentRepository;
import com.crmbackend.backend.Comment.CommentService;
import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Comment.dto.CommentDTOResponse;
import com.crmbackend.backend.Message.MessageModel;
import com.crmbackend.backend.Message.dto.MessageDTORequest;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import com.crmbackend.backend.Message.mappers.MessageMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.*;

@SpringBootTest
@TestPropertySource(properties = {
        "TWILIO_ACCOUNT_SID=xjs",
        "TWILIO_AUTH_TOKEN=fdsfds",
        "TWILIO_PHONE_NUMBER=+747"
})
public class CommentServiceTest {

    @Autowired
    private CommentService commentService;

    @MockBean
    private CommentRepository commentRepository;

    @MockBean
    private CommentMapper commentMapper;

    @Test
    void addAndDisplayComment() {
        CommentDTORequest commentDTORequest = CommentDTORequest.builder()
                .taskId(1L)
                .description("testowy komentarz")
                .authorId(1L)
                .build();

        commentService.addComment(commentDTORequest);
        verify(commentRepository, times(1)).save(commentMapper.mapDTOToEntity(commentDTORequest));

        CommentModel commentModel = commentMapper.mapDTOToEntity(commentDTORequest);
        when(commentRepository.save(any(CommentModel.class))).thenReturn(commentModel);
        when(commentRepository.findAll()).thenReturn(Collections.singletonList(commentModel));

        List<CommentDTOResponse> allComments =  commentService.getAllComments();
        assertEquals(1, allComments.size());
    }

    @Test
    void deleteComment() {


        CommentDTORequest commentDTORequest = CommentDTORequest.builder()
                .taskId(1L)
                .description("testowy komentarz")
                .authorId(1L)
                .build();

        CommentModel commentModel = new CommentModel();
        commentModel.setId(1L); // Dodanie ID dla modelu
        commentModel.setDescription("testowy komentarz");

        // Mockowanie mapowania DTO do encji
        when(commentMapper.mapDTOToEntity(commentDTORequest)).thenReturn(commentModel);

        // Mockowanie zachowania repozytorium przy dodawaniu komentarza
        when(commentRepository.save(any(CommentModel.class))).thenReturn(commentModel);
        when(commentRepository.findAll()).thenReturn(Collections.singletonList(commentModel));

        // When - Dodawanie komentarza
        commentService.addComment(commentDTORequest);

        // Then - Weryfikacja, czy metoda save została wywołana
        verify(commentRepository, times(1)).save(commentModel);

        // Then - Weryfikacja, czy komentarz został dodany
        List<CommentDTOResponse> allComments = commentService.getAllComments();
        assertEquals(1, allComments.size());

        // When - Usunięcie komentarza
        commentService.deleteComment(commentModel.getId());

        // Mockowanie zachowania repozytorium przy usuwaniu komentarza
        when(commentRepository.findAll()).thenReturn(Collections.emptyList());

        // Then - Weryfikacja, czy komentarz został usunięty
        allComments = commentService.getAllComments();
        assertEquals(0, allComments.size());
    }
}
