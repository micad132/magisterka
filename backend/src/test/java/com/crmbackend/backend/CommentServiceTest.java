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
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
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

    @Autowired
    private MockMvc mockMvc;

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
        commentModel.setId(1L);
        commentModel.setDescription("testowy komentarz");


        when(commentMapper.mapDTOToEntity(commentDTORequest)).thenReturn(commentModel);


        when(commentRepository.save(any(CommentModel.class))).thenReturn(commentModel);
        when(commentRepository.findAll()).thenReturn(Collections.singletonList(commentModel));


        commentService.addComment(commentDTORequest);

        verify(commentRepository, times(1)).save(commentModel);


        List<CommentDTOResponse> allComments = commentService.getAllComments();
        assertEquals(1, allComments.size());


        commentService.deleteComment(commentModel.getId());


        when(commentRepository.findAll()).thenReturn(Collections.emptyList());

        allComments = commentService.getAllComments();
        assertEquals(0, allComments.size());
    }

    @Test
    void shouldThrow401WhenTryingToAddGetCommentsWithoutJWT() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/comment")
                        .with(csrf()))
                .andExpect(status().isUnauthorized());
    }

}
