import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  addTechnologie(body:any):Observable<any>{
    return this.http.post(this.baseApiUrl+"/api/Technologie",body);
  }

  deleteTechnologie(id:number){
    return this.http.delete(this.baseApiUrl + '/api/Technologie/' + id,{ responseType: 'text' })
  }

}
