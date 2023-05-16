import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Demande } from '../models/demande.model';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/Demandes');
  }

  /*getDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/demandes');
  }*/
    addDemande(body:Demande): Observable <any> {
      console.log(body)
    return this.http.post(this.baseApiUrl + '/api/demandes' ,body);
  }
// gettraiterchef(id: number): Observable<Demande>{
//   console.log("traiter",this.baseApiUrl)
//   return this.http.get<Demande>(this.baseApiUrl + '/api/demandes/'+ id)

// }

gettraiterchef(id: number, demande: Demande): Observable<Demande> {
  const url = `${this.baseApiUrl}/api/demandes/${id}`;
  return this.http.put<Demande>(url, demande );
}
  getDemande(id: string): Observable<Demande>{
   return this.http.get<Demande>(this.baseApiUrl + '/api/demandes/' + id)
  }

  updateDemande(id: number, updateDemandeRequest: Demande): Observable<Demande> {
  return this.http.put<Demande>(this.baseApiUrl + '/api/demandes/'+ id,
  updateDemandeRequest);
  }
  deleteDemande(id:number){
    return this.http.delete(this.baseApiUrl + '/api/demandes/' + id,{ responseType: 'text' })
  }
}
