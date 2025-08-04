package com.synapse.employeemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.synapse.employeemanagement.model.Employee;

@Repository
public interface Employee_Repo extends JpaRepository<Employee, Long> {

}
