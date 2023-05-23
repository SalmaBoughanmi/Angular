import { EmployeesService } from './../../../../services/employees.service';
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
import { OffresService } from 'src/app/services/offres.service';

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
  statut:string="Acceptée"
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
      password: '',
      diplomes: [],
      experiences:  [] ,
      certifications:  [],
      technologies:  [] }
  };
  dtrigger:Subject <any>=new Subject <any>()
  demandes: Demande[] = [];
  TableData: any[] = [];
  demande: any;
  constructor(
    public dialog: MatDialog,
    private demandesService: DemandesService,
    private employeeService:EmployeesService,
    private offresService: OffresService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.dtoption = {
      pagingType: 'full_numbers',
      searching:true,
      lengthChange:false
    };
    this.getAllDemandes();
  }

  EmployeeTab:any[]=[]
  OffreTab:any[]=[]
  offr_id!:any
  emp_id!:any
  Demandes:any[]=[]
  Offres:any[]=[]
  matches :any[]= [];
  getAllDemandes() {
    var  matricule:any = JSON.parse(localStorage.getItem("user") || "" );
    console.log(matricule['matricule'],'get matricule_resp')
    this.demandesService.getAllDemandes(matricule['matricule']).subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        this.offr_id =   demandes[0].offre_id;
        console.log( 'offre', this.offr_id)
        this.employeeService.getAllEmployees().subscribe((data:any[]) => {
          console.log( '+subscription employee',[data]);
          this.EmployeeTab= data.filter(item => {
            if (item.matricule_resp == matricule['matricule']) {
              return item
            }
          })
          console.log('+subscription demande',this.demandes)
          console.log('+subscription employee',this.EmployeeTab);

          for(let i=0 ; i <  this.EmployeeTab.length ; i++){

             let CustomData = {
                nom: this.EmployeeTab[i].nom,
                prenom: this.EmployeeTab[i].prenom,
                matricule:this.EmployeeTab[i].matricule,
                employe_id:this.EmployeeTab[i].employe_id,
                demande_id: this.demandes[i].demande_id,
                statut_chef: this.demandes[i].statut_chef,
              };
            this.Demandes.push(CustomData)
          //....................................//
        }
          console.log('+patched Demandes',this.Demandes, this.offr_id);


          this.offresService.getOffre(this.offr_id).subscribe((data:any) => {

            this.OffreTab = [data];
            this.OffreTab.forEach((el) => {

              let patchData = {
                offr_fonction: el.fonction
              };
              this.Offres.push(patchData);
            });
            console.log('+patched offres',this.Offres);

            this.getMatch(this.Demandes, this.Offres )
            console.log('offre data',this.Offres);
            console.log('emp data', this.Demandes)
          });


        });

        this.dtrigger.next(null)
      },
      error: (response) => {
        console.log(response);
      },

    });
  }

  // public getMtchTab(a:any[],b:any[]){
  //   console.log('aaaa-------bbbb',a,b)
  //   for(let i=0 ; i <  a.length ; i++){
  //     for(let j=0 ; j < b.length ; j++){
  //       let CustomData = {
  //           nom: b[j].nom,
  //           prenom: b[j].prenom,
  //           matricule:b[j].matricule,
  //           employe_id: b[j].employe_id,
  //           demande_id: a[i].demande_id,
  //       };
  //       this.Demandes.push(CustomData)
  //     }
  //   }
  //   console.log('-------', this.Demandes)
  // }

  public getMatch(x:any[],y:any[]) {
    console.log('xxxx-------yyyy',x,y)
    for(let i=0 ; i <  x.length ; i++){
      console.log('result 1', x[i])
      for(let j=0 ; j < y.length ; j++){
        console.log('result 2', y[j])

        let New=
          {
            nom:x[i].nom,
            prenom:x[i].prenom,
            matricule:x[i].matricule,
            fonction:y[j].offr_fonction,
            emp_id:x[i].employe_id,
            demande_id:x[i].demande_id,
            statut_chef: x[i].statut_chef,
          }
        this.matches.push(New)
        this.TableData= this.matches.filter(item => {
          if (item.statut_chef == "En attente") {
            return item
          }
        })
      }


      //...........................................//
    }
    console.log('-------',this.matches)
  }
  goToDetails(event:any){
    console.log(event)
  let demande = event.demande_id
  let employe = event.emp_id
    this.router.navigate(['/chef/trait-chef',employe, demande ]);
  }
  }



