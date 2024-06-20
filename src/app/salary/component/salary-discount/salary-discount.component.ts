import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Salary } from '../../shared/models/salary.model';

import { SalaryService } from '../../shared/services/salary.service';
import { FormUtilsService } from '../../../shared/service/form-utils.service';

@Component({
  selector: 'app-salary-discount',
  templateUrl: './salary-discount.component.html',
  styleUrl: './salary-discount.component.scss'
})
export class SalaryDiscountComponent implements OnInit {

    public form: FormGroup;

    public salary: Salary;

    constructor(
        protected salaryService: SalaryService,
        protected formUtilsService: FormUtilsService,
    ) {}

    ngOnInit(): void {}

    onCreateForm(form: FormGroup): void {
        this.form = form;
    }

    search(): void {
        if (this.formUtilsService.validate(this.form)) {
            this.salaryService.calculateSalary(this.form.value.salary)
                .subscribe((salary: Salary): void => {
                    this.salary = salary;
                });
        }
    }
}
