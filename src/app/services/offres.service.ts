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

// addOffre(body:any):Observable<any> {

//   return this.http.post(this.baseApiUrl + '/api/Offre',body);
// }

addOffre({ addOffreRequest }: { addOffreRequest: Offre; }) {
  addOffreRequest.offre_id = 0 ;
  return this.http.post(this.baseApiUrl + '/api/Offre' ,
  addOffreRequest,{ responseType: 'text' });
}

getOffre(offre_id: any): Observable<Offre>{

 return this.http.get<Offre>(this.baseApiUrl + '/api/Offre/' + offre_id)
}

updateOffre(id: number, updateOffreRequest: Offre): Observable<Offre> {
return this.http.put<Offre>(this.baseApiUrl + '/api/Offre/'+ id,
updateOffreRequest);
}
deleteOffre(id:number){
  return this.http.delete(this.baseApiUrl + '/api/Offre/' + id,{ responseType: 'text' })
}
searchoffre(body:any):Observable<any>{
  return this.http.get(this.baseApiUrl+'/api/Offre/SearchOffre/'+body)

}
}

