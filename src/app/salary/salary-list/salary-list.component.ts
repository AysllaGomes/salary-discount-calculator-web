import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Salary } from '../shared/models/salary.model';

import { SalaryService } from '../shared/services/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.scss'
})
export class SalaryListComponent implements OnInit {
    public form: FormGroup;

    public salary: Salary;

    constructor(
        protected formBuilder: FormBuilder,
        protected salaryService: SalaryService,
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): FormGroup {
        this.form = this.formBuilder.group({
            salary: [null, Validators.required],
            dependentCount: [null, Validators.required]
        });

        return this.form;
    }

    onSubmit(): void {
        this.salaryService.calculateSalary(this.form.value.salary, this.form.value.dependentCount)
            .subscribe((salary: Salary): void => {
                this.salary = salary;
            });
    }
}
