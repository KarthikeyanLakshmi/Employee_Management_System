import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-add.html',
  styleUrls: ['./employee-add.scss']
})
export class EmployeeAddForm {
  employee: Employee = {
    employeeName: '',
    dob: new Date(),
    maritalStatus: 'Single',
    contactNo: '',
    address: '',
    personalEmail: '',
    department: '',
    branch: ''
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee)
      .subscribe(response => {
        console.log('Employee created:', response);
        alert('Employee added successfully!');
        this.resetForm();
      });
  }

  resetForm() {
    this.employee = {
      employeeName: '',
      dob: new Date(),
      maritalStatus: 'Single',
      contactNo: '',
      address: '',
      personalEmail: '',
      department: '',
      branch: ''
    };
  }
}