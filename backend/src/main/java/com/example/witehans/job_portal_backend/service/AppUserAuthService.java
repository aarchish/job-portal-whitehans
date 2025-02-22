package com.example.witehans.job_portal_backend.service;

import com.example.witehans.job_portal_backend.repository.AppUserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import static java.util.Collections.emptyList;

public class AppUserAuthService implements UserDetailsService {

    private final AppUserRepository appUserRepository;

    public AppUserAuthService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepository.findByUsername(username)
                .map(appUsers -> new User(appUsers.getUsername(), appUsers.getPassword(), emptyList()))
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
