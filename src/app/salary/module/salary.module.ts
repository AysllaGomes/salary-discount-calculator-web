import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
        MatInputModule,
        MatButtonModule
    ]
})
export class SalaryModule {}
