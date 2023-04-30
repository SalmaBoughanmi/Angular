import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-editoffre',
  templateUrl: './editoffre.component.html',
  styleUrls: ['./editoffre.component.css']
})
export class EditoffreComponent implements OnInit{
  offreDetails: Offre = {
    offre_id: 0,
    mission: '',
    fonction: '',
    description: '',
    type_offre: '',
    nb_poste: 0,


  };

  constructor ( private route: ActivatedRoute, private offreService:
    OffresService, private router: Router) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          if (id){
            this.offreService.getOffre(id)
            .subscribe({
              next: (response) =>{
                this.offreDetails = response;
              }
            })
          }
        }
      })
  }

  updateOffre(){
    this.offreService.updateOffre(this.offreDetails.offre_id , this.offreDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/rh/offres']);
      }
    })
  }

}
