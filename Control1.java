package com.example.demo.Ecomerce.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Ecomerce.Model.model;
import com.example.demo.Ecomerce.Repository.Repos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
@RestController

public class Control1 {
	 @Autowired
		Repos  repo;
	    
	    @PostMapping("/user")
	    model newUser(@RequestBody model newUser) {
	    	return repo.save(newUser);
	    }
	    @GetMapping("/users")
	    List<model>getAllUsers(){
	    	return repo.findAll();
	    }
	   
	    
	    	
	    
	}
	

