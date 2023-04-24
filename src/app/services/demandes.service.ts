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

  getDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/demandes');
  }
    addDemande({ addDemandeRequest }: { addDemandeRequest: Demande; }) {
    addDemandeRequest.demande_id = 0 ;
    return this.http.post(this.baseApiUrl + '/api/demandes' ,
    addDemandeRequest,{ responseType: 'text' });
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
