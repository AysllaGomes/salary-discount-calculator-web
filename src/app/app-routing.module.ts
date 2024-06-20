import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalaryListComponent } from './salary/salary-list/salary-list.component';
import { SalaryDetailComponent } from './salary/salary-detail/salary-detail.component';

const routes: Routes = [
    {
        path: 'salaries',
        component: SalaryListComponent
    },
    {
        path: 'salaries/:id',
        component: SalaryDetailComponent
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
