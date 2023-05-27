import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Certification } from 'src/app/models/certification.model';
import { Demande } from 'src/app/models/demande.model';
import { Diplome } from 'src/app/models/diplome.model';
import { Experience } from 'src/app/models/experience.model';
import { Technologie } from 'src/app/models/technologie.mpdel';
import { DemandesService } from 'src/app/services/demandes.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { OffresService } from 'src/app/services/offres.service';
import { environment } from 'src/environments/environment';

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
  selector: 'app-dem-trait-ds',
  templateUrl: './dem-trait-ds.component.html',
  styleUrls: ['./dem-trait-ds.component.css']
})
export class DemTraitDsComponent implements OnInit{
//statut:string="Accept%C3%A9e";
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
  employees:any[]=[];
  OffreTab:any[]=[];

constructor(
 // public dialog: MatDialog,
  public demandesService:DemandesService,
  private employeeService:EmployeesService,
  private offresService: OffresService,
  private router:Router
  ){}
ngOnInit(): void {
  this.dtoption = {
    pagingType: 'full_numbers',
    searching:true,
    lengthChange:false
  };
   this.employeeService.getAllEmployees().subscribe((data:any[]) => {
        this.employees= data;
        console.log('employees',this.employees);
    });
    this.offresService.getOffres().subscribe((data:any) => {
        this.OffreTab = data;
    });
  this.getAllDemandes();
}

Demandes_ds:any[]=[];

getAllDemandes() {
    this.demandesService.getDemandeByStatutRh("Acceptée").subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        console.log(this.demandes);
        this.demandes.forEach((demande)=>{
            if(demande.statut_ds == "En attente")
            {
                let employe:any;
                let offer:any;
                for(let j=0 ; j <  this.employees.length ; j++)
                {
                  if (this.employees[j].employe_id == demande.employe_id)
                  {
                    employe = this.employees[j];
                  }
                }
                console.log('employee',employe);
                for(let j=0 ; j <  this.OffreTab.length ; j++)
                {
                    if (demande.offre_id == this.OffreTab[j].offre_id)
                    {
                      offer= this.OffreTab[j];
                    }
                }
                console.log('offer',offer);

                let CustomData =
                {
                  nom : employe.nom,
                  prenom: employe.prenom,
                  matricule:employe.matricule,
                  fonction:offer.fonction,
                  emp_id:employe.employe_id,
                  demande_id: demande.demande_id,
                  statut_rh: demande.statut_rh,
                };

                console.log('demande + employees + offer',CustomData);
                this.Demandes_ds.push(CustomData);
            }
        });

        this.TableData = this.Demandes_ds;
        console.log('TableData :  ',this.TableData);

        this.dtrigger.next(null)
      },
      error: (response) => {
        console.log(response);
      },

    });
  }

goToDetails(event:any){
  console.log(event)
let demande = event.demande_id
let employe = event.emp_id
  this.router.navigate(['/ds/trait-ds',employe, demande ]);
}

}
