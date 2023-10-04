package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(User user) {
    	
        if (userRepository.existsById(user.getId())) {
            return userRepository.save(user);
        } else {
            // Handle the case where the user doesn't exist
            return null; 
        }
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
