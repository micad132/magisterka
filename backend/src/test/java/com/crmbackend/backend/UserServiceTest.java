package com.crmbackend.backend;

import com.crmbackend.backend.User.UserMapper;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.UserService;
import com.crmbackend.backend.User.dto.request.EditUserDTORequest;
import com.crmbackend.backend.User.enums.UserRole;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@TestPropertySource(properties = {
        "TWILIO_ACCOUNT_SID=xjs",
        "TWILIO_AUTH_TOKEN=fdsfds",
        "TWILIO_PHONE_NUMBER=+747"
})
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserMapper userMapper;

    @Test
    void editUser() {
        Long userId = 1L;
        UserRole newRole = UserRole.ADMIN;

        EditUserDTORequest editUserDTORequest = EditUserDTORequest.builder()
                .id(userId)
                .userRole(newRole)
                .build();

        UserModel existingUser = new UserModel();
        existingUser.setId(userId);
        existingUser.setUserRole(UserRole.CLIENT);

        // Mockowanie metody findById
        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        // When
        userService.editUser(editUserDTORequest);

        // Then
        verify(userRepository, times(1)).findById(userId);
        assertEquals(newRole, existingUser.getUserRole());
        verify(userRepository, times(1)).save(existingUser);
    }


}
