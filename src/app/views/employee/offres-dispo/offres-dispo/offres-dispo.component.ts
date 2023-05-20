import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offres-dispo',
  templateUrl: './offres-dispo.component.html',
  styleUrls: ['./offres-dispo.component.css']
})
export class OffresDispoComponent implements OnInit{
  baseApiUrl: string = environment.baseApiUrl;
  offreDetails: Offre = {
    offre_id: 0,
    mission: '',
    fonction: '',
    description: '',
    type_offre: '',
    nb_poste: 0,

  };
  itemsearch:any
  offres: Offre[] = [];
constructor(private offresService: OffresService, private http: HttpClient , private router: Router) {}

  ngOnInit(): void {
    this.getOffres()
}

Details(offre_id: number){
  this.router.navigate(['/chef/Details-offre']
  ,{
    queryParams: {
    'idOffre': offre_id,
  }
}

  )
}
getOffres(){
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
search(){
this.offresService.searchoffre(this.itemsearch).subscribe(data=>{
  console.log((data))
  this.offres =data
})
}
annule(){
  this.getOffres()
}
goto(id:any){
  this.offresService.getOffre(id).subscribe(data=>{console.log(data)

      this.router.navigateByUrl("/employee/ajout-dem-offre/"+id)


  })

}
}
