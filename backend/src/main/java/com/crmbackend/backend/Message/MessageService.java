package com.crmbackend.backend.Message;

import com.crmbackend.backend.Message.dto.MessageDTORequest;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import com.crmbackend.backend.Message.mappers.MessageMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MessageService {


    private final MessageRepository messageRepository;

    private final MessageMapper messageMapper;

    public void addMessage(MessageDTORequest messageDTORequest) {
        MessageModel messageModel = messageMapper.mapDTOToEntity(messageDTORequest);
        messageRepository.save(messageModel);
    }

    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }

    public List<MessageDTOResponse> getAllMessages() {
        return messageRepository.findAll().stream().map(messageMapper::mapEntityToDTO).collect(Collectors.toList());
    }

//    public List<MessageDTOResponse> getAllLoggedUserMessages() {
//
//    }
}
