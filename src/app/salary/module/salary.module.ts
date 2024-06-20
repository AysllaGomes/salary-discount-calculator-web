import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SalaryComponent } from '../component/salary/salary.component';
import { SalaryDiscountComponent } from '../component/salary-discount/salary-discount.component';

@NgModule({
    declarations: [
        SalaryComponent,
        SalaryDiscountComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class SalaryModule {}
