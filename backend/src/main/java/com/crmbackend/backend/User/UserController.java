package com.crmbackend.backend.User;

import com.crmbackend.backend.User.dto.request.EditUserDTORequest;
import com.crmbackend.backend.User.dto.request.UserDTOEditPersonalInfoRequest;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.User.dto.response.UserDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/user")
@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/getLoggedUser")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDTOResponse> getLoggedUser(Authentication authentication){
        UserDTOResponse loggedUser = Optional.ofNullable(authentication)
                .filter(f -> f.getPrincipal() instanceof  UserWrapper)
                .map(Authentication::getPrincipal)
                .map(UserWrapper.class::cast)
                .map(UserWrapper::getUserModel)
                .map(userMapper::mapEntityToDTO)
                .orElse(null);
        return ResponseEntity.ok(loggedUser);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("TEST");
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDTORequest userDTORequest) {
        userService.registerUser(userDTORequest);
        return ResponseEntity.ok("Uzytkownik zarejestrowany!");
    }

    @GetMapping("/users")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<UserDTOResponse>> getAllUsers() {
        List<UserDTOResponse> allUsers =  userService.getAllUsers();
        return ResponseEntity.ok(allUsers);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<String> deleteUser(@PathVariable ("id") String id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("Uzytkownik usuniety!");
    }

    @PatchMapping("/editPersonalInfo")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDTOResponse> editPersonalInfo(@RequestBody UserDTOEditPersonalInfoRequest userDTOEditPersonalInfoRequest) {
        return ResponseEntity.ok(userService.editPersonalInfo(userDTOEditPersonalInfoRequest));
    }

    @PatchMapping("/editUser")
    @PreAuthorize("isAuthenticated() && (hasAnyAuthority('ADMIN'))")
    public ResponseEntity<String> editUser(@RequestBody EditUserDTORequest editUserDTORequest) {
        userService.editUser(editUserDTORequest);
        return ResponseEntity.ok("Edytowano użytkownika!");
    }

//    @GetMapping("/details/{id}")
//    public ResponseEntity<UserDTOResponse> getLoggedUserDetails() {
//        return Us
//    }
}
