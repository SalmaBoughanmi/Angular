import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-ajout-offre-rh',
  templateUrl: './ajout-offre-rh.component.html',
  styleUrls: ['./ajout-offre-rh.component.css']
})
export class AjoutOffreRhComponent implements OnInit {
  addOffreRequest: Offre= {
    offre_id: 0,
    mission: '',
    fonction: '',
    description: '',
    type_offre: '',
    nb_poste: 0
  };

  constructor(private offreService: OffresService, private router: Router) { }

  ngOnInit(): void {

  }
  addOffre(){
    this.offreService.addOffre({ addOffreRequest: this.addOffreRequest })
    .subscribe({
      next:(Offre) => {
      this.router.navigate(['/rh/offres']);
      }
    });
  }

}
