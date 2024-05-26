package com.crmbackend.backend.Message.mappers;

import com.crmbackend.backend.Message.MessageModel;
import com.crmbackend.backend.Message.dto.MessageDTORequest;
import com.crmbackend.backend.Message.dto.MessageDTOResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class MessageMapper {


    private final UserRepository userRepository;

    public MessageModel mapDTOToEntity(MessageDTORequest messageDTORequest) {

        UserModel authorModel = userRepository.findById(messageDTORequest.getAuthorId()).orElseThrow();
        UserModel receiverModel = userRepository.findById(messageDTORequest.getReceiverId()).orElseThrow();

        return MessageModel.builder()
                .text(messageDTORequest.getText())
                .authorModel(authorModel)
                .receiverModel(receiverModel)
                .date(LocalDateTime.now())
                .build();
    }

    public MessageDTOResponse mapEntityToDTO(MessageModel messageModel) {
        return MessageDTOResponse.builder()
                .id(messageModel.getId())
                .authorName(messageModel.getAuthorModel().getName())
                .authorSurname(messageModel.getAuthorModel().getSurname())
                .authorUsername(messageModel.getAuthorModel().getUsername())
                .receiverName(messageModel.getReceiverModel().getName())
                .receiverSurname(messageModel.getReceiverModel().getSurname())
                .receiverUsername(messageModel.getReceiverModel().getUsername())
                .text(messageModel.getText())
                .date(messageModel.getDate())
                .build();
    }
}
