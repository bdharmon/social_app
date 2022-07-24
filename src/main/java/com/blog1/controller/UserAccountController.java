package com.blog1.controller;

import com.blog1.entity.UserAccount;
import com.blog1.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "users")
public class UserAccountController {

    private final UserAccountRepository userAccountRepository;

    @Autowired
    public UserAccountController(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @GetMapping(path = "all")
    public List<UserAccount> getAllUsers() {
        return userAccountRepository.findAll(Sort.by("username").ascending());
    }

    @GetMapping(path = "{id}")
    public Optional<UserAccount> getUser(@PathVariable String id) {
        return userAccountRepository.findById(UUID.fromString(id));
    }

}
