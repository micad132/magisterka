package com.crmbackend.backend.mappers.UserMapper;

import com.crmbackend.backend.Config.PasswordEncoderConfig;
import com.crmbackend.backend.Task.TaskModel;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsAssignee;
import com.crmbackend.backend.User.dto.response.UserDTOTaskDetailsCreator;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class UserMapper {

    private final PasswordEncoder passwordEncoder;
    public UserModel mapUserDTOToEntity(UserDTORequest userDTORequest) {
        return UserModel.builder()
                .name(userDTORequest.getName())
                .surname(userDTORequest.getSurname())
                .age(userDTORequest.getAge())
                .username(userDTORequest.getUsername())
                .pesel(userDTORequest.getPesel())
                .userGender(userDTORequest.getUserGender())
                .email(userDTORequest.getEmail())
                .userRole(userDTORequest.getUserRole())
                .countryName(userDTORequest.getCountryName())
                .streetName(userDTORequest.getStreetName())
                .cityName(userDTORequest.getCityName())
                .phoneNumber(userDTORequest.getPhoneNumber())
                .postalCode(userDTORequest.getPostalCode())
                .password(passwordEncoder.encode(userDTORequest.getPassword()))
                .createdAccountDate(LocalDateTime.now())
                .build();
    }

    public UserDTOResponse mapEntityToDTO(UserModel userModel) {
        return UserDTOResponse.builder()
                .id(userModel.getId())
                .name(userModel.getName())
                .surname(userModel.getSurname())
                .age(userModel.getAge())
                .username(userModel.getUsername())
                .userGender(userModel.getUserGender())
                .pesel(userModel.getPesel())
                .countryName(userModel.getCountryName())
                .streetName(userModel.getStreetName())
                .cityName(userModel.getCityName())
                .phoneNumber(userModel.getPhoneNumber())
                .userRole(userModel.getUserRole())
                .postalCode(userModel.getPostalCode())
                .email(userModel.getEmail())
                .createdAccountDate(userModel.getCreatedAccountDate())
                .build();
    }

    public UserDTOTaskDetailsAssignee mapEntityToUserDetailsAssignee(UserModel userModel) {
        return UserDTOTaskDetailsAssignee.builder()
                .assigneeUsername(userModel.getUsername())
                .assigneeCountry(userModel.getCountryName())
                .assigneeSurname(userModel.getSurname())
                .assigneeName(userModel.getName())
                .assigneeAge(userModel.getAge())
                .build();
    }

    public UserDTOTaskDetailsCreator mapEntityToUserDetailsCreator(UserModel userModel) {
        return UserDTOTaskDetailsCreator.builder()
                .creatorUsername(userModel.getUsername())
                .creatorName(userModel.getName())
                .creatorSurname(userModel.getSurname())
                .creatorAge(userModel.getAge())
                .creatorCountry(userModel.getCountryName())
                .build();
    }

}
