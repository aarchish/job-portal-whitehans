package com.example.witehans.job_portal_backend.controller;

import com.example.witehans.job_portal_backend.model.AppUsers;
import com.example.witehans.job_portal_backend.repository.AppUserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody AppUsers user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        appUserRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login() {
        // Spring Security handles the login process automatically
        return "Login successful";
    }
}