import { Component, OnInit } from '@angular/core';

import { SalaryService } from "../shared/services/salary.service";

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrl: './salary-list.component.scss'
})
export class SalaryListComponent implements OnInit {
    salaryData: any;

    constructor(
        protected salaryService: SalaryService
    ) {}

    ngOnInit(): void {
        this.salaryService.getSalaryData()
            .subscribe((data) => {
                this.salaryData = data;
                console.log(this.salaryData);
            });
    }
}
