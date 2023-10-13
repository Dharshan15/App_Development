package com.pms.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.pms.main.constant.Api;
import com.pms.main.dto.response.UserResponse;
import com.pms.main.model.User;
import com.pms.main.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@Tag(name = "User")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@GetMapping("/all")
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return ResponseEntity.ok(userList);
    }

	@PostMapping("/post")
	public ResponseEntity<User> create(final @RequestBody User users){
		User createUser=userService.create(users);
		return ResponseEntity.ok(createUser);
	}
	
	@GetMapping("/get/{uid}")
	public ResponseEntity<Optional<User>> read(final @PathVariable Long uid){
		Optional<User> createdCandidate=userService.read(uid);
		return ResponseEntity.ok(createdCandidate);
	}
	
	@PutMapping("/put/{uid}")
	public ResponseEntity<User> update(@PathVariable Long uid, @RequestBody User user) throws JsonProcessingException {
	    Optional<User> existingUserOptional = userService.read(uid);

	    if (existingUserOptional.isPresent()) {
	        User existingUser = existingUserOptional.get();

	        // Update the fields of the existing user with the values from the request
	        existingUser.setName(user.getName());
	        existingUser.setEmail(user.getEmail());
	        existingUser.setRole(user.getRole());
	        
	        // Update the password if provided
	        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
	            // You should hash the password or apply your security measures here.
	            existingUser.setPassword(user.getPassword());
	        }
	        
	        // You can update other fields as needed

	        // Save the updated user in the database
	        final User updatedUser = userService.update(existingUser);
	        return ResponseEntity.ok(updatedUser);
	    } else {
	        // Handle the case where the user with the provided uid does not exist
	        return ResponseEntity.notFound().build();
	    }
	}

	@DeleteMapping("/delete/{id}")
	public void delete(final @PathVariable Long id) {
		userService.delete(id);
	}
	
}
