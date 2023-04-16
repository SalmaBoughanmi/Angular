import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Diplome } from '../models/diplome.model';

@Injectable({
  providedIn: 'root'
})
export class DiplomesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllDiplomes(): Observable<Diplome[]> {
    return this.http.get<Diplome[]>(this.baseApiUrl + '/api/employees');
  }

  addDiplome({ addDiplomeRequest }: { addDiplomeRequest: Diplome; }): Observable<Diplome> {
    addDiplomeRequest.employe_id = 0 ;
    return this.http.post<Diplome>(this.baseApiUrl + '/api/employees' ,
    addDiplomeRequest);
  }
}
