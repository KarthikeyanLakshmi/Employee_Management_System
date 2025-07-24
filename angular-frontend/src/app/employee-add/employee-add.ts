import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-add.html',
  styleUrls: ['./employee-add.scss']
})
export class EmployeeAdd {
  employee: any = {
    employeeName: '',
    dob: '',
    maritalStatus: 'Single',
    contactNo: '',
    address: '',
    personalEmail: '',
    department: '',
    branch: ''
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit() {
    // Convert date to ISO format (YYYY-MM-DD)
    if (this.employee.dob) {
      const dobDate = new Date(this.employee.dob);
      this.employee.dob = dobDate.toISOString().split('T')[0];
    }
    
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (res) => {
        alert('Employee created successfully!');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error creating employee:', err);
        alert(`Error: ${err.error?.message || 'Unknown error'}`);
      }
    });
  }

  resetForm() {
    this.employee = {
      employeeName: '',
      dob: '',
      maritalStatus: 'Single',
      contactNo: '',
      address: '',
      personalEmail: '',
      department: '',
      branch: ''
    };
  }
}