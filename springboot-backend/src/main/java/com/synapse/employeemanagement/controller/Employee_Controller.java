package com.synapse.employeemanagement.controller;

import com.synapse.employeemanagement.model.Employee;
import com.synapse.employeemanagement.repository.Employee_Repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class Employee_Controller {

    private final Employee_Repo employeeRepo;

    @Autowired
    public Employee_Controller(Employee_Repo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(
        @RequestBody @Valid Employee employee) {
        Employee savedEmployee = employeeRepo.save(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

        @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }
}