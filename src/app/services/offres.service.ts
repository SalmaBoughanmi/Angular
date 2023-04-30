import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Offre } from '../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

getOffres(): Observable<Offre[]> {
  return this.http.get<Offre[]>(this.baseApiUrl + '/api/Offre');
}

addOffre({ addOffreRequest }: { addOffreRequest: Offre; }) {
  addOffreRequest.offre_id = 0 ;
  return this.http.post(this.baseApiUrl + '/api/Offre' ,
  addOffreRequest,{ responseType: 'text' });
}

getOffre(id: string): Observable<Offre>{
 return this.http.get<Offre>(this.baseApiUrl + '/api/Offre/' + id)
}

updateOffre(id: number, updateOffreRequest: Offre): Observable<Offre> {
return this.http.put<Offre>(this.baseApiUrl + '/api/Offre/'+ id,
updateOffreRequest);
}
deleteOffre(id:number){
  return this.http.delete(this.baseApiUrl + '/api/Offre/' + id,{ responseType: 'text' })
}
}

