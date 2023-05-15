import { Offre } from 'src/app/models/offre.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Demande } from 'src/app/models/demande.model';
import { DemandesService } from 'src/app/services/demandes.service';
import { environment } from 'src/environments/environment';
import { Experience } from 'src/app/models/experience.model';
import { Diplome } from 'src/app/models/diplome.model';
import { Certification } from 'src/app/models/certification.model';
import { Technologie } from 'src/app/models/technologie.mpdel';

@Component({
  selector: 'app-dem-trait-chef',
  templateUrl: './dem-trait-chef.component.html',
  styleUrls: ['./dem-trait-chef.component.css']
})
export class DemTraitChefComponent implements OnInit{
  baseApiUrl: string = environment.baseApiUrl;
  dtoption: DataTables.Settings = {};
  demandeDetails: Demande = {
    demande_id: 0,
    offre_id: 0,
    employe_id: 0,
    nb_a_exp: 0,
    type_demande: '',
    titre_fonction: '',
    nature_contrat: '',
    lien_fichier: '',
    nom_fichier: '',
    remarque: '',
    statut_chef: '',
    statut_rh: '',
    statut_ds: '',
    motif_chef: '',
    motif_rh: '',
    motif_ds: '',
    collaborateur_remp:'',
    affectation: '',
    offres: {
      offre_id: 0 ,
      mission: '' ,
      fonction: '',
      description: '',
      nb_poste: 0 ,
      type_offre: ''
    } ,

    employes: {
      employe_id: 0,
      nom: '',
      prenom: '',
      matricule: '',
      matricule_resp: '',
      fonction: '',
      role: '',
      date_recrutement: '',
      email: '',
      compte_winds: '',
      password: '',
      diplomes: [],
      experiences:  [] ,
      certifications:  [],
      technologies:  [] }
  };
  dtrigger:Subject <any>=new Subject <any>()
  demandes: Demande[] = [];
  constructor(
    private demandesService: DemandesService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtoption = {
      pagingType: 'full_numbers',
      searching:true,
      lengthChange:false
    };
    this.getAllDemandes();
  }
  getAllDemandes() {
    this.demandesService.getAllDemandes().subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        this.dtrigger.next(null)
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

}
