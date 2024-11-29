package com.example.rockstar.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.rockstar.entity.Employee;
import com.example.rockstar.service.EmployeeService;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

	private final EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id) {

		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Sucessfully Delete"); // new ResponseEntity<>("Success",HttpStatus.NO_CONTENT):
	}

	@PutMapping("/{id}")
	public EmployeeResponse updateEmployee(@RequestBody EmployeeRequest empRequst, @PathVariable("id") int id) {

		Employee employee = employeeService.updateEmployee(id, empRequst);
		return toEmployeeResponse(employee);
	}

	@GetMapping("/{id}")
	public EmployeeResponse findEmployeeById(@PathVariable("id") int id) {
		Employee employee = employeeService.getEmployeeById(id);
		return toEmployeeResponse(employee);
	}

//	 firstName,lastName,email, phoneNumber,hiredDate,salary
	public record EmployeeRequest(String firstName, String lastName, String email, String phoneNumber,
			LocalDate hiredDate, double salary) {
	}

	@PostMapping
	public EmployeeResponse createEmployee(@RequestBody EmployeeRequest request) {
		Employee employee = employeeService.createEmployee(request);
		return toEmployeeResponse(employee);
	}

	public record EmployeeResponse(int id, @JsonProperty("first_name") String firstName,
			@JsonProperty("last_name") String lastName, String email, @JsonProperty("ph_No") String phoneNumber,
			@JsonProperty("hire_date") LocalDate localDate, double salary) {
	}

	@GetMapping
	public List<EmployeeResponse> listAllEmployees() {
		return employeeService.getAllEmployees().stream().map(e -> toEmployeeResponse(e))
				.collect(Collectors.toUnmodifiableList());
	}

	private EmployeeResponse toEmployeeResponse(Employee e) {
		return new EmployeeResponse(e.getId(), e.getFirstName(), e.getLastName(), e.getEmail(), e.getPhoneNumber(),
				e.getHireDate(), e.getSalary()

		);
	}
}
