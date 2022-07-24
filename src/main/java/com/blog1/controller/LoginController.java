package com.blog1.controller;

import com.blog1.security.JwtUsernameAndPasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "auth")
public class LoginController {

    private record LoginForm(String username, String password) {}

    @PostMapping(path = "login")
    public String login(@RequestBody LoginForm loginForm, HttpServletResponse response) {
        return JwtUsernameAndPasswordAuthenticationFilter.generateJwtToken(loginForm.username, loginForm.password, response);
    }

}
