import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  addCertif(body:any):Observable<any>{
    return this.http.post(this.baseApiUrl+"/api/Certification",body);
  }

}
