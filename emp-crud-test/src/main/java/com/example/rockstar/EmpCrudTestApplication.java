package com.example.rockstar;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.example.rockstar.dao.EmployeeDao;
import com.example.rockstar.entity.Employee;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class EmpCrudTestApplication {
	
	private final EmployeeDao employeeDao;
	

	public EmpCrudTestApplication(EmployeeDao employeeDao) {
	super();
	this.employeeDao = employeeDao;
	}
	
	@Bean @Profile("dev1")
	public ApplicationRunner runner(EmployeeDao employeeDao) {
		return args ->{
			List.of(
					new Employee("John","Doe","kk@gmail.com","55-55-5-5",LocalDate.of(2023, 3, 3),2500),
					new Employee("Kyaw","Htet","Kyawhtet@gmail.com","55-55-5-5",LocalDate.of(2024, 3, 3),30000)
					).forEach(employeeDao::save);
			
		};
	}


	public static void main(String[] args) {
		SpringApplication.run(EmpCrudTestApplication.class, args);
	}

}
