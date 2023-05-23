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

  getAllDemandes(matricule:any): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/Demandes/responsable/'+ matricule);
  }
  getDemandeById(id:any): Observable<Demande[]> {
    console.log(id)
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/Demandes/Demande_id?demande_id='+ id);
  }
  getDemandeByStatutChef(statut:any): Observable<Demande[]> {
    console.log(statut)
    return this.http.get<Demande[]>(this.baseApiUrl + '/api/Demandes/statut_chef?statut_chef='+ statut);
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

gettraiterchef(id: number, statut: boolean , notif: any): Observable<Demande> {
  const url = `${this.baseApiUrl}/api/Demandes/TraiterDemandeChef?demande_id=${id}&Etat=${statut}&NoteChef=${notif}`;
  return this.http.get<any>(url);
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
  // AcceptDemande(data:any , id:any){
  //   return this.http.put<Demande>(this.baseApiUrl + '/api/demandes/'+ id,
  //  data);
  // }
  // CanceledDemande(event:boolean){

  // }

}
