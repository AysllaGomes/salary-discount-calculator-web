import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SalaryComponent } from './salary.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';

@NgModule({
    declarations: [
        SalaryComponent,
        SalaryListComponent,
        SalaryDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class SalaryModule {}
