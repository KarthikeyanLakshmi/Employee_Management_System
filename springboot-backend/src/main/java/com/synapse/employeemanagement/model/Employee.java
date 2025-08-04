package com.synapse.employeemanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table (name = "Employees")
@Data

public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_ID")
    private Long employeeId;

    @NotBlank(message = "Employee Name is required")
    @Column(name = "Employee_Name", nullable = false)
    private String employeeName;

    @NotNull(message = "Date of Birth is required")
    @Past(message = "Date of Birth must be in the past")
    @Column(name = "DoB", nullable = false)
<<<<<<< HEAD:springboot-backend/src/main/java/com/synapse/employeemanagement/model/Employee.java
    private LocalDate employeeDob;
=======
    private LocalDate employeeDOB;
>>>>>>> 6bccef8d4df0b4b232458dcb17a6a0c729d5801a:springboot-backend/src/main/java/com/synapse/model/Employee_Details.java

    @Column(name = "Marital_Status")
    private String employeeMStatus;

    @Pattern(regexp = "^\\d{10}$", message = "Contact No must be 10 digits")
    @Column(name = "Contact_No")
    private String employeeContactNo;

    @Size(max = 255, message = "Address cannot exceed 255 characters")
    @Column(name = "Address")
    private String employeeAddress;

    @Email(message = "Invalid email format")
    @Column(name = "Personal_email")
    private String employeePersonalEmail;

    @Column(name = "Department")
<<<<<<< HEAD:springboot-backend/src/main/java/com/synapse/employeemanagement/model/Employee.java
    private String synapseDepartment;

    @Column(name = "Branch")
    private String synapseBranch;
=======
    private String employeeDepartment;

    @Column(name = "Branch")
    private String EmployeeBranch;
>>>>>>> 6bccef8d4df0b4b232458dcb17a6a0c729d5801a:springboot-backend/src/main/java/com/synapse/model/Employee_Details.java

}
