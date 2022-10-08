package com.timlarramore.authentication.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.timlarramore.authentication.models.LoginUser;
import com.timlarramore.authentication.models.User;
import com.timlarramore.authentication.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	public User register(User newUser, BindingResult result) {
		//To-Do Reject Values
		//Reject if email is taken(present in db)
		//1. Find user by email
		Optional<User> optionalUser = userRepo.findByEmail(newUser.getEmail());
		//2. if email is present, reject
		if(optionalUser.isPresent()) {
			result.rejectValue("email", "Unique", "The email is already registered");
		}
		//Reject is passwords do not match
		if(!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "Matches", "The password and confirm password do not match");
		}
		if(result.hasErrors()) {
			return null;
		}
		//hash and set password, save user to db
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
		newUser.setPassword(hashed);
		return userRepo.save(newUser);
	}
	
	public User login(LoginUser newLogin, BindingResult result ) {
		//To-Do Reject Values
		//Find user by email
		Optional<User> optionalUser= userRepo.findByEmail(newLogin.getEmail());
		//If email is present, reject
		if(!optionalUser.isPresent()) {
			result.rejectValue("email","Unique", "The email is not registered");
			return null;
		}
		//grab user from potential user
		User user= optionalUser.get();
		//if password match fails
		if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
		    result.rejectValue("password", "Matches", "Invalid Password!");
		}
		//if errors
		if(result.hasErrors()) {
		    return null;
		}
		//all good
		return user;
	}
	

}
