import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  addExperience(body:any):Observable<any>{
    return this.http.post(this.baseApiUrl+"/api/Experience",body);
  }

  deleteExperience(id:number){
    return this.http.delete(this.baseApiUrl + '/api/Experience/' + id,{ responseType: 'text' })
  }
}
