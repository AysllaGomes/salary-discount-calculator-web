import { Component, OnInit } from '@angular/core';

import { Salary } from '../shared/models/salary.model';

import { SalaryService } from '../shared/services/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.scss'
})
export class SalaryListComponent implements OnInit {
    public formData: any = {};

    public salary: Salary;

    constructor(
        protected salaryService: SalaryService
    ) {}

    ngOnInit(): void {}

    calculateSalary(): void {
        this.salaryService.calculateSalary(this.formData.grossSalary, this.formData.dependents)
            .subscribe((result) => {
                this.salary = result;
            });
    }
}
