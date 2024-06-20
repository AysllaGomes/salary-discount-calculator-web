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

    getSalaries(): Observable<Salary[]> {
        return this.httpClient.get<Salary[]>(this.apiUrl);
    }

    calculateSalary(grossSalary: number, dependents: number): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}?salary=${grossSalary}&dependents=${dependents}`);
    }
}
