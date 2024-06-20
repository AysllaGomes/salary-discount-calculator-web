import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalaryDiscountComponent } from './salary/salary-discount/salary-discount.component';

const routes: Routes = [
    {
        path: 'salaries',
        component: SalaryDiscountComponent
    },
    {
        path: '',
        redirectTo: '/salaries',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
