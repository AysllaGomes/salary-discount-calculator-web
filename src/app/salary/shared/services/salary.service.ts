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

    calculateSalary(grossSalary: number): Observable<Salary> {
        const url: string = `${this.apiUrl}?salary=${grossSalary}`;
        return this.httpClient.get<Salary>(url);
    }
}
