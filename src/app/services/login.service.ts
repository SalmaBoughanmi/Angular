import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiUrl: string = environment.baseApiUrl;
iduser:any ;
  constructor(private http: HttpClient, ) { }
login( matricule:string,role:string) {
  this.http.post<any>(this.baseApiUrl+"/front/login", { maticule: matricule ,role:role}).subscribe(data => {

        localStorage.setItem("id",data.employee_id) ;
        localStorage.getItem("id") ;

    })
}

}




