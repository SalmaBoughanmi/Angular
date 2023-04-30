import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent {
  baseApiUrl: string = environment.baseApiUrl;
  offreDetails: Offre = {
    offre_id: 0,
    mission: '',
    fonction: '',
    description: '',
    type_offre: '',
    nb_poste: 0,

  };
offres: Offre[] = [];
constructor(private offresService: OffresService, private http: HttpClient , private router: Router) {}

  ngOnInit(): void {
    this.getAllOffre()
  }
  getAllOffre(){
    this.offresService.getOffres()
    .subscribe({
      next: (offres) => {
        this.offres = offres;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  updateOffre(id:number){
    this.router.navigate(['/rh/editoffre/'+id])
  }
  deleteOffre(id: number){

     this.offresService.deleteOffre(id)
    .subscribe((res:any)=>{
      this.getAllOffre()

    });
}

 }


