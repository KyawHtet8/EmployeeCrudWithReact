package com.example.rockstar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rockstar.entity.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	

}
