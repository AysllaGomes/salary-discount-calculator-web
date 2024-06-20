import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalaryListComponent } from './salary/salary-list/salary-list.component';

const routes: Routes = [
    {
        path: 'salaries',
        component: SalaryListComponent
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
