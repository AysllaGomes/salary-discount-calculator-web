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
        protected http: HttpClient
    ) {}

    getSalaryData(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    getSalaries(): Observable<Salary[]> {
        return this.http.get<Salary[]>(this.apiUrl);
    }

    getSalary(id: number): Observable<Salary> {
        return this.http.get<Salary>(`${this.apiUrl}/${id}`);
    }

    calculateSalary(grossSalary: number, dependents: number): Observable<any> {
        return this.http.get(`${this.apiUrl}?salary=${grossSalary}&dependents=${dependents}`);
    }
}
