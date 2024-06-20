import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SalaryComponent } from './salary.component';
import { SalaryListComponent } from './salary-list/salary-list.component';

@NgModule({
    declarations: [
        SalaryComponent,
        SalaryListComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class SalaryModule {}
