import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private apiUrl = 'http://localhost:3000/discount';

  constructor(private http: HttpClient) {}

  getDiscountedSalary(salary: number | undefined): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?salary=${salary}`);
  }
}
