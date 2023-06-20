package com.example.demo.Ecomerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Ecomerce.Model.Model2;

public interface Repos2 extends JpaRepository<Model2,String> {

Model2 findByUsername(String user);








}

