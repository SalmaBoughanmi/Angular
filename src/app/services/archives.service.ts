import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Archive } from '../models/archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getArchives(): Observable<Archive[]> {
    return this.http.get<Archive[]>(this.baseApiUrl + '/api/archive');
  }
    addArchive({ addArchiveRequest }: { addArchiveRequest: Archive; }) {
    addArchiveRequest.archive_id = 0 ;
    return this.http.post(this.baseApiUrl + '/api/archive' ,
    addArchiveRequest,{ responseType: 'text' });
  }

  getArchive(id: string): Observable<Archive>{
   return this.http.get<Archive>(this.baseApiUrl + '/api/archive/' + id)
  }

  updateArchive(id: number, updateArchiveRequest: Archive): Observable<Archive> {
  return this.http.put<Archive>(this.baseApiUrl + '/api/archive/'+ id,
  updateArchiveRequest);
  }
  deleteArchive(id:number){
    return this.http.delete(this.baseApiUrl + '/api/archive/' + id,{ responseType: 'text' })
  }

}
