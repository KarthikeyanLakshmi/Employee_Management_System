import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddForm } from './employee-add';

describe('EmployeeAdd', () => {
  let component: EmployeeAddForm;
  let fixture: ComponentFixture<EmployeeAddForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
