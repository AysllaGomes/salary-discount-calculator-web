import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Salary } from '../models/salary.model';

import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SalaryService {
    private apiUrl = `${environment.api.url}/discount`;

    constructor(
        protected httpClient: HttpClient
    ) {}

    calculateSalary(salary: number, discount: number, dependents: number): Observable<Salary> {
        const url: string = `${this.apiUrl}?salary=${salary}&discount=${discount}&dependents=${dependents}`;
        return this.httpClient.get<Salary>(url);
    }
}
