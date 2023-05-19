import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  addDiplome(body:any):Observable<any>{
    return this.http.post(this.baseApiUrl+"/api/Diplome",body);
  }

  deleteDiplome(id:number){
    return this.http.delete(this.baseApiUrl + '/api/Diplome/' + id,{ responseType: 'text' })
}
}
