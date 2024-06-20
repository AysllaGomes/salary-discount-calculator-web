import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SalaryComponent } from './salary.component';
import { SalaryListComponent } from './salary-list/salary-list.component';

@NgModule({
    declarations: [
        SalaryComponent,
        SalaryListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class SalaryModule {}
