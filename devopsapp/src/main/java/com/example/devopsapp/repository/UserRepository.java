package com.example.devopsapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.devopsapp.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
