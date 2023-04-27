import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiUrl: string = environment.baseApiUrl;
iduser:any ;
  constructor(private http: HttpClient, ) { }
// login( matricule:string,role:string) {
//   this.http.post<any>(this.baseApiUrl+"/front/login", { maticule: matricule ,role:role}).subscribe(data => {

//         localStorage.setItem("id",data.employee_id) ;
//         localStorage.getItem("id") ;

//     })
// }
// login?email=admin%40gmail.com&password=123456
login(email:any, password:any):Observable<any>{
  console.log(email,password)
  return this.http.post(this.baseApiUrl+'/api/Employees/login?email='+email+'&password='+password,password)
}
}




