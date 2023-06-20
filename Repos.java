package com.example.demo.Ecomerce.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Ecomerce.Model.model;



	public interface Repos extends JpaRepository<model,String> {
	model findByUsername(String user);
	}



