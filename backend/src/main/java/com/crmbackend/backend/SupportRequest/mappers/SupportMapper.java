package com.crmbackend.backend.SupportRequest.mappers;

import com.crmbackend.backend.SupportRequest.SupportRequestModel;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestEditRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestResponse;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@AllArgsConstructor
@Component
public class SupportMapper {

    private final UserRepository userRepository;

    public SupportRequestModel mapDTOToEntity(SupportRequestRequest supportRequestRequest) {
        UserModel userModel = userRepository.findById(supportRequestRequest.getUserId()).orElse(new UserModel());
        return SupportRequestModel.builder()
                .description(supportRequestRequest.getDescription())
                .supportCategory(supportRequestRequest.getSupportCategory())
                .createdTime(LocalDateTime.now())
                .userModel(userModel)
                .build();
    }

    public SupportRequestResponse mapEntityToDTO(SupportRequestModel supportRequestModel) {
        return SupportRequestResponse.builder()
                .description(supportRequestModel.getDescription())
                .supportCategory(supportRequestModel.getSupportCategory())
                .dateTime(supportRequestModel.getCreatedTime())
                .username(supportRequestModel.getUserModel().getUsername())
                .build();
    }
}
