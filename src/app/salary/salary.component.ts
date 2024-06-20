import { Component } from '@angular/core';

import { DiscountService } from "./shared/services/discount.service";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent {
  constructor(
    protected discountService: DiscountService
  ) {}

  public salary: number | undefined;
  public discountedSalary: number | undefined;

  calculateDiscount(): void {
    this.discountService.getDiscountedSalary(this.salary).subscribe(response => {
      this.discountedSalary = response.discountedSalary;
    });
  }
}
