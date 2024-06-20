import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalaryComponent } from './salary/component/salary/salary.component';

const routes: Routes = [
    {
        path: 'salaries',
        component: SalaryComponent
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
