import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
}


}
