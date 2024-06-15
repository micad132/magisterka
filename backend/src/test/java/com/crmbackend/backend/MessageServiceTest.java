package com.crmbackend.backend;

import com.crmbackend.backend.Comment.dto.CommentDTORequest;
import com.crmbackend.backend.Message.MessageModel;
import com.crmbackend.backend.Message.MessageRepository;
import com.crmbackend.backend.Message.MessageService;
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
public class MessageServiceTest {

    @Autowired
    private MessageService messageService;

    @MockBean
    private MessageRepository messageRepository;

    @MockBean
    private MessageMapper messageMapper;

    @Test
    void addAndDisplayMessage() {
        MessageDTORequest messageDTORequest = MessageDTORequest.builder()
                        .authorId(1L)
                        .receiverId(1L)
                        .text("Testowa wiadomość")
                                .build();

        messageService.addMessage(messageDTORequest);
        verify(messageRepository, times(1)).save(messageMapper.mapDTOToEntity(messageDTORequest));

        MessageModel messageModel = messageMapper.mapDTOToEntity(messageDTORequest);

        when(messageRepository.save(any(MessageModel.class))).thenReturn(messageModel);
        when(messageRepository.findAll()).thenReturn(Collections.singletonList(messageModel));

        List<MessageDTOResponse> allMessages =  messageService.getAllMessages();
        assertEquals(1, allMessages.size());
    }

    @Test
    void deleteMessage() {

        MessageDTORequest messageDTORequest = MessageDTORequest.builder()
                .authorId(1L)
                .receiverId(1L)
                .text("Testowa wiadomość")
                .build();

        MessageModel messageModel = new MessageModel();
        messageModel.setText("Testowa wiadomość");

        // Mockowanie mapowania DTO do encji
        when(messageMapper.mapDTOToEntity(messageDTORequest)).thenReturn(messageModel);

        // Mockowanie zachowania repozytorium przy dodawaniu wiadomości
        when(messageRepository.save(any(MessageModel.class))).thenReturn(messageModel);
        when(messageRepository.findAll()).thenReturn(Collections.singletonList(messageModel));

        // Dodawanie wiadomości
        messageService.addMessage(messageDTORequest);
        verify(messageRepository, times(1)).save(messageModel);

        // Weryfikacja, czy wiadomość została dodana
        List<MessageDTOResponse> allMessages = messageService.getAllMessages();
        assertEquals(1, allMessages.size());



        // Usunięcie wiadomości
        messageService.deleteMessage(messageModel.getId());

        // Mockowanie zachowania repozytorium przy usuwaniu wiadomości
        when(messageRepository.findAll()).thenReturn(Collections.emptyList());

        // Weryfikacja, czy wiadomość została usunięta
        allMessages = messageService.getAllMessages();
        assertEquals(0, allMessages.size());
    }


}
