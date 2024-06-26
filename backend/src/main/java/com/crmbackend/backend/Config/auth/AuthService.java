package com.crmbackend.backend.Config.auth;

import com.crmbackend.backend.Config.request.LoginRequest;
import com.crmbackend.backend.User.UserModel;
import com.crmbackend.backend.User.UserRepository;
import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.exceptions.UserAlreadyExistsException;
import com.crmbackend.backend.User.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AuthService {

    private final TotpService totpService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public Object verify2FACode(UserModel userModel, LoginRequest loginRequest) {
        String a = "3";
        try {
            Integer.parseInt(loginRequest.getCode2FA());
        } catch (NumberFormatException ex) {
            return "Kod jest niepoprawnie sformatowany!";
        }

        if (totpService.verifyCode(userModel.getSecret2FA(), Integer.parseInt(loginRequest.getCode2FA()))) {
            try {
                return authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            } catch (AuthenticationException authenticationException) {
                return "Niewlasciwe dane!";
            }

        } else {
            return "Podany kod jest niepoprawny!";
        }
    }

    public String registerUser(UserDTORequest userDTORequest) {
        if(userRepository.existsByEmail(userDTORequest.getEmail())) {
            throw new UserAlreadyExistsException("Uzytkownik z takim emailem juz istnieje!");
        }
        if(userRepository.existsByUsername(userDTORequest.getUsername())) {
            throw new UserAlreadyExistsException("Uzytkownik z taka nazwa juz istnieje!");
        }
        String secretCode = totpService.generateSecret();
        UserModel userModel = userMapper.mapUserDTOToEntity(userDTORequest);
        userModel.setSecret2FA(secretCode);
        String qrURL = totpService.generateQRUrl(userModel);
        userRepository.save(userModel);
        return qrURL;
    }
}
