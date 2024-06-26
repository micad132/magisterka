package com.crmbackend.backend.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findUserModelByUsername(String username);

    Boolean existsByEmail(String email);
    Boolean existsByUsername(String username);
}
