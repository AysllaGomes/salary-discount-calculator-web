import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../shared/shared.module';

import { SalaryComponent } from '../component/salary/salary.component';
import { SalaryDiscountComponent } from '../component/salary-discount/salary-discount.component';
import { SalaryDiscountFormComponent } from '../component/salary-discount/form/salary-discount-form.component';

@NgModule({
    declarations: [
        SalaryComponent,
        SalaryDiscountComponent,
        SalaryDiscountFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class SalaryModule {}
