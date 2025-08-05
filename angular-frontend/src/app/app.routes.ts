import { Routes } from '@angular/router';
import { EmployeeAddForm } from './components/employee-add/employee-add';

export const routes: Routes = [
  { path: '', component: EmployeeAddForm, title: 'Employee Form' }
];