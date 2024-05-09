package com.crmbackend.backend.mappers.UserMapper;

import com.crmbackend.backend.Config.PasswordEncoderConfig;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserMapper {

    private final PasswordEncoder passwordEncoder;
    public UserModel mapUserDTOToEntity(UserDTORequest userDTORequest) {
        return UserModel.builder()
                .name(userDTORequest.getName())
                .surname(userDTORequest.getSurname())
                .age(userDTORequest.getAge())
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
                .build();
    }

    public UserDTOResponse mapEntityToDTO(UserModel userModel) {
        return UserDTOResponse.builder()
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
                .build();
    }

}
