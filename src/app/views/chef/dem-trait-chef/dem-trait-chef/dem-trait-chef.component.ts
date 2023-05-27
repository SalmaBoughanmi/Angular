// import { EmployeesService } from './../../../../services/employees.service';
// import { Offre } from 'src/app/models/offre.model';
// import { HttpClient } from '@angular/common/http';
// import { Component, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subject } from 'rxjs';
// import { Demande } from 'src/app/models/demande.model';
// import { DemandesService } from 'src/app/services/demandes.service';
// import { environment } from 'src/environments/environment';
// import { Experience } from 'src/app/models/experience.model';
// import { Diplome } from 'src/app/models/diplome.model';
// import { Certification } from 'src/app/models/certification.model';
// import { Technologie } from 'src/app/models/technologie.mpdel';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { OffresService } from 'src/app/services/offres.service';

// interface Employee {
//   employe_id: number;
//   nom: string;
//   prenom: string;
//   matricule: string;
//   matricule_resp: string;
//   fonction: string;
//   role: string;
//   date_recrutement: string;
//   email: string;
//   compte_winds: string;
//   password: string;
//   diplomes: Diplome [];
//   experiences: Experience [] ;
//   certifications: Certification [];
//   technologies: Technologie [] ;
// }
// @Component({
//   selector: 'app-dem-trait-chef',
//   templateUrl: './dem-trait-chef.component.html',
//   styleUrls: ['./dem-trait-chef.component.css']
// })
// export class DemTraitChefComponent implements OnInit{
//   baseApiUrl: string = environment.baseApiUrl;
//   statut:string="Acceptée"
//   employee : any
//   dtoption: DataTables.Settings = {};
//   demandeDetails: Demande = {
//     demande_id: 0,
//     offre_id: 0,
//     employe_id: 0,
//     nb_a_exp: 0,
//     type_demande: '',
//     titre_fonction: '',
//     nature_contrat: '',
//     lien_fichier: '',
//     nom_fichier: '',
//     remarque: '',
//     statut_chef: '',
//     statut_rh: '',
//     statut_ds: '',
//     motif_chef: '',
//     motif_rh: '',
//     motif_ds: '',
//     collaborateur_remp:'',
//     affectation: '',
//     offres: {
//       offre_id: 0 ,
//       mission: '' ,
//       fonction: '',
//       description: '',
//       nb_poste: 0 ,
//       type_offre: ''
//     } ,

//     employes: {
//       employe_id: 0,
//       nom: '',
//       prenom: '',
//       matricule: '',
//       matricule_resp: '',
//       fonction: '',
//       role: '',
//       date_recrutement: '',
//       email: '',
//       password: '',
//       diplomes: [],
//       experiences:  [] ,
//       certifications:  [],
//       technologies:  [] }
//   };
//   dtrigger:Subject <any>=new Subject <any>()
//   demandes: Demande[] = [];
//   TableData: any[] = [];
//   demande: any;
//   constructor(
//     public dialog: MatDialog,
//     private demandesService: DemandesService,
//     private employeeService:EmployeesService,
//     private offresService: OffresService,
//     private router:Router
//   ) {}

//   ngOnInit(): void {
//     this.dtoption = {
//       pagingType: 'full_numbers',
//       searching:true,
//       lengthChange:false
//     };
//     this.getAllDemandes();
//   }

//   EmployeeTab:any[]=[]
//   OffreTab:any[]=[]
//   offr_id!:any
//   emp_id!:any
//   Demandes:any[]=[]
//   Offres:any[]=[]
//   matches :any[]= [];
//   getAllDemandes() {
//     var  matricule:any = JSON.parse(localStorage.getItem("user") || "" );
//     console.log(matricule['matricule'],'get matricule_resp')
//     this.demandesService.getAllDemandes(matricule['matricule']).subscribe({
//       next: (demandes) => {
//         this.demandes = demandes;
//         console.log(this.demandes)
//         this.demandes.forEach((demande)=>{
//           this.offr_id =   demande.offre_id;
//           console.log( 'offre', this.offr_id)
//           this.employeeService.getAllEmployees().subscribe((data:any[]) => {
//             console.log( '+subscription employee',[data]);
//             this.EmployeeTab= data.filter(item => {
//               if (item.matricule_resp == matricule['matricule']) {
//                 return item
//               }
//             })
//             console.log('+subscription demande',this.demandes)
//             console.log('+subscription employee',this.EmployeeTab);

//            // for(let i=0 ; i <  this.demandes.length ; i++){

//               let DemData = {
//                 //  nom: this.EmployeeTab[i].nom,
//                 //  prenom: this.EmployeeTab[i].prenom,
//                 //  matricule:this.EmployeeTab[i].matricule,
//                 //  employe_id:this.EmployeeTab[i].employe_id,
//                  demande_id: demande.demande_id,
//                  offr_id: demande.offre_id,
//                  statut_chef: demande.statut_chef,
//                };
//              //this.Demandes.push(CustomData)

//              for(let j=0 ; j <  this.EmployeeTab.length ; j++){

//               if (this.EmployeeTab[j].employe_id == demande.employe_id){

//                 let EmpData = {
//               nom : this.EmployeeTab[j].nom,
//              prenom: this.EmployeeTab[j].prenom,
//              matricule:this.EmployeeTab[j].matricule,
//              employe_id:this.EmployeeTab[j].employe_id,
//               }
//               let CustomData = { EmpData, DemData }
//                 this.Demandes.push(CustomData)

//               }





//            //....................................//
//          }


//            this.offresService.getOffres().subscribe((data:any) => {

//             this.OffreTab = data;
//             this.OffreTab.forEach((el) => {

//               let i=0 ;
//               do {
//                 let patchData;
//                 if (this.Demandes[i].DemData.offr_id == el.offre_id) {
//                      patchData = {
//                       offr_fonction: el.fonction
//                   };
//                   this.Offres.push(patchData);
//                 }
//                 i++;
//               } while (i<this.Demandes.length -1);
//             });
//               console.log('+patched offres maha',this.Offres);
//               console.log('offre data maha',this.Demandes);

//             this.getMatch(this.Demandes, this.Offres )
//             console.log('offre data',this.Offres);
//             console.log('emp data', this.Demandes)
//           });


//           })

//         });

//         this.dtrigger.next(null)
//       },
//       error: (response) => {
//         console.log(response);
//       },

//     });
//   }

//   // public getMtchTab(a:any[],b:any[]){
//   //   console.log('aaaa-------bbbb',a,b)
//   //   for(let i=0 ; i <  a.length ; i++){
//   //     for(let j=0 ; j < b.length ; j++){
//   //       let CustomData = {
//   //           nom: b[j].nom,
//   //           prenom: b[j].prenom,
//   //           matricule:b[j].matricule,
//   //           employe_id: b[j].employe_id,
//   //           demande_id: a[i].demande_id,
//   //       };
//   //       this.Demandes.push(CustomData)
//   //     }
//   //   }
//   //   console.log('-------', this.Demandes)
//   // }

//   public getMatch(x:any[],y:any[]) {
//     console.log('xxxx-------yyyy',x,y)
//     for(let i=0 ; i <  x.length ; i++){
//       console.log('result 1', x[i])
//      // for(let j=0 ; j < y.length ; j++){
//         //console.log('result 2', y[j])

//         let New=
//           {
//             nom:x[i].EmpData.nom,
//             prenom:x[i].EmpData.prenom,
//             matricule:x[i].EmpData.matricule,
//             fonction:y[i].offr_fonction,
//             emp_id:x[i].EmpData.employe_id,
//             demande_id:x[i].DemData.demande_id,
//             statut_chef: x[i].DemData.statut_chef,
//           }
//         this.matches.push(New)
//         this.TableData= this.matches.filter(item => {
//           if (item.statut_chef == "En attente") {
//             return item
//           }
//         })
//       //}


//       //...........................................//
//     }
//     console.log('-------',this.matches)
//   }
//   goToDetails(event:any){
//     console.log(event)
//   let demande = event.demande_id
//   let employe = event.emp_id
//     this.router.navigate(['/chef/trait-chef',employe, demande ]);
//   }
//   }


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
  employees_chef:any[]=[];
  OffreTab:any[]=[]
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
    var  matricule:any = JSON.parse(localStorage.getItem("user") || "" );
    console.log(matricule['matricule'],'get matricule_resp')
    this.employeeService.getAllEmployees().subscribe((data:any[]) => {
        this.employees_chef= data.filter(item => {
          if (item.matricule_resp == matricule['matricule'])
          {
            return item;
          }
        });
        console.log('employees chef',this.employees_chef);
    });
    this.offresService.getOffres().subscribe((data:any) => {
        this.OffreTab = data;
    });
    this.getAllDemandes();
  }

  EmployeeTab:any[]=[]
  offr_id!:any
  emp_id!:any
  Demandes:any[]=[]
  Offres:any[]=[]
  matches :any[]= [];

  Demandes_chef:any[]=[];


  getAllDemandes() {
    var  matricule:any = JSON.parse(localStorage.getItem("user") || "" );
    console.log(matricule['matricule'],'get matricule_resp');

    this.demandesService.getAllDemandes(matricule['matricule']).subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        console.log(this.demandes);
        this.demandes.forEach((demande)=>{
            if(demande.statut_chef == "En attente")
            {
                let employe:any;
                let offer:any;
                for(let j=0 ; j <  this.employees_chef.length ; j++)
                {
                  if (this.employees_chef[j].employe_id == demande.employe_id)
                  {
                    employe = this.employees_chef[j];
                    console.log('employee vv',this.employees_chef[j]);
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
                console.log('offer ',offer);

                let CustomData =
                {
                  nom : employe.nom,
                  prenom: employe.prenom,
                  matricule:employe.matricule,
                  fonction:offer.fonction,
                  emp_id:employe.employe_id,
                  demande_id: demande.demande_id,
                  statut_chef: demande.statut_chef,
                };

                console.log('demande + employees chef',CustomData);
                this.Demandes_chef.push(CustomData);
            }
        });

        this.TableData = this.Demandes_chef;
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
    this.router.navigate(['/chef/trait-chef',employe, demande ]);
  }
  }


