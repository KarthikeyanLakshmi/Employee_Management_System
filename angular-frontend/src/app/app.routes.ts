import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', component: EmployeeFormComponent, title: 'Employee Form' }
];