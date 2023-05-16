import { Offre } from 'src/app/models/offre.model';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Demande } from 'src/app/models/demande.model';
import { DemandesService } from 'src/app/services/demandes.service';
import { environment } from 'src/environments/environment';
import { Experience } from 'src/app/models/experience.model';
import { Diplome } from 'src/app/models/diplome.model';
import { Certification } from 'src/app/models/certification.model';
import { Technologie } from 'src/app/models/technologie.mpdel';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
interface Employee {
  employe_id: number;
  nom: string;
  prenom: string;
  matricule: string;
  matricule_resp: string;
  fonction: string;
  role: string;
  date_recrutement: string;
  email: string;
  compte_winds: string;
  password: string;
  diplomes: Diplome [];
  experiences: Experience [] ;
  certifications: Certification [];
  technologies: Technologie [] ;
}
@Component({
  selector: 'app-dem-trait-chef',
  templateUrl: './dem-trait-chef.component.html',
  styleUrls: ['./dem-trait-chef.component.css']
})
export class DemTraitChefComponent implements OnInit{
  baseApiUrl: string = environment.baseApiUrl;

  employee : any
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
  demande: any;
  constructor(
    public dialog: MatDialog,
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
  Traiter(){
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });


  }

  // Traiter(id:number): void{

  //   this.demandesService.gettraiterchef(id, this.demande)
  //     .subscribe(response => {
  //       console.log('Success:', response);
  //     }, error => {
  //       console.log('Error:', error);
  //     });

  // }
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
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
