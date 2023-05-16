import { Offre } from 'src/app/models/offre.model';
import { Component, Input } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-offre',
  templateUrl: './details-offre.component.html',
  styleUrls: ['./details-offre.component.css']
})
export class DetailsOffreComponent {
id:any;
offre_id: any;
  // offres: Offre[] = [];
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
constructor(private offresService: OffresService, private http: HttpClient , private router: Router,private route: ActivatedRoute,) {}

  ngOnInit(): void {
this.offre_id = this.route.snapshot.queryParamMap.get('idOffre')
console.log("idOffre",this.offre_id)
this.getOffres(this.offre_id)

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('idOffre');
        console.log("iddddd",id)
        if (id){
          this.offresService.getOffre(id)
          .subscribe({
            next: (response) =>{
              this.offreDetails = response;
              console.log("offre",this.offreDetails)
            }
          })
        }
      }
    })
    this.getOffres(this.offre_id)
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
getOffres(offre_id: string){
  this.offresService.getOffre(offre_id)
  .subscribe((response:Offre)=>{
    console.log("res",response)
this.offres[0]=response
  })
}

}
