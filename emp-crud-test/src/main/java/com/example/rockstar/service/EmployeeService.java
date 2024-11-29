package com.example.rockstar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.rockstar.controller.EmployeeController.EmployeeRequest;
import com.example.rockstar.dao.EmployeeDao;
import com.example.rockstar.entity.Employee;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
public class EmployeeService {

	private final EmployeeDao employeeDao;

	public EmployeeService(EmployeeDao employeeDao) {
		super();
		this.employeeDao = employeeDao;
	}
	
	public void deleteEmployee(int id) {
		employeeDao.deleteById(id);
	}
	
	public Employee updateEmployee(int id,EmployeeRequest empRequest) {
		Employee employee = toEmployee(empRequest);
		if(employeeDao.existsById(id)) {
			employee.setId(id);
			return employeeDao.save(employee);
		}
		throw new EntityNotFoundException(id + "not found!");
	}
	
	 public Employee getEmployeeById(int id) {
		 return employeeDao.findById(id).orElse(null);
	 }

	public List<Employee> getAllEmployees() {
		return employeeDao.findAll();
	}

	public Employee createEmployee(EmployeeRequest request) {
		
		Employee employee = toEmployee(request);
		
	
		return employeeDao.save(employee);
	}

	private Employee toEmployee(EmployeeRequest request) {
		return new Employee(
				request.firstName(),
				request.lastName(),
				request.email(),
				request.phoneNumber(),
				request.hiredDate(),
				request.salary());
	}

}
