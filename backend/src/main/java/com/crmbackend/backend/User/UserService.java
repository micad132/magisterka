package com.crmbackend.backend.User;

import com.crmbackend.backend.User.dto.request.UserDTORequest;
import com.crmbackend.backend.mappers.UserMapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public void registerUser(UserDTORequest userDTORequest) {

        UserModel userModel = userMapper.mapUserDTOToEntity(userDTORequest);
        userRepository.save(userModel);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserModelByUsername(username).map(UserWrapper::new).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
