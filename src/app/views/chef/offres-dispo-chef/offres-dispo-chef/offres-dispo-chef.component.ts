import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';
import { OffresService } from 'src/app/services/offres.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offres-dispo-chef',
  templateUrl: './offres-dispo-chef.component.html',
  styleUrls: ['./offres-dispo-chef.component.css']
})
export class OffresDispoChefComponent implements OnInit {
  baseApiUrl: string = environment.baseApiUrl;
  offreDetails: Offre = {
    offre_id: 0,
    mission: '',
    fonction: '',
    description: '',
    nb_poste: 0,

  };
  offres: Offre[] = [];
constructor(private offresService: OffresService, private http: HttpClient , private router: Router) {}

  ngOnInit(): void {
    this.getOffres()
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
}
