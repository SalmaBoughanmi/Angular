
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from 'src/app/models/demande.model';
import { DemandesService } from 'src/app/services/demandes.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-ajout-dem-offre',
  templateUrl: './ajout-dem-offre.component.html',
  styleUrls: ['./ajout-dem-offre.component.css']
})
export class AjoutDemOffreComponent implements OnInit {
  listdiplome:any
  listcertif:any
  listtechno:any
  idemployer:any
  listexper:any
  employer:any
  myGroup!:FormGroup
  idoffre:any
  /*datecreation:any
  datecreation2:any*/

    constructor( private employeeService: EmployeesService, private router: Router,
      private fb:FormBuilder , private route:ActivatedRoute,private demandeservice:DemandesService){
      this.idemployer=localStorage.getItem("iduser");
console.log(this.idemployer)
this.idoffre=this.route.snapshot.paramMap.get('id')
    }
  ngOnInit(): void {
   /* let date =new Date()
    this.datecreation=this.datePipe.transform(date,"yyyy/MM/dd")
    this.datecreation2=this.datePipe.transform(date,"yyyy-MM-dd")
    console.log(this.datecreation)*/
    this.employeeService.getEmployee(this.idemployer).subscribe(data=>{
      console.log(data)
      this.employer=data
      this.listdiplome=data.diplomes
      this.listcertif=data.certifications
      this.listexper=data.experiences
      this.listtechno=data.technologies
      console.log(this.listdiplome)
      console.log(this.listcertif)
      console.log(this.listexper)
      console.log(this.listtechno)
      this.addform()
    })  }

    addform(){
      this.myGroup=this.fb.group({
        nature_contrat:['',Validators.required],
        nb_a_exp:['',Validators.required],
        remarque:['',Validators.required],

      })
    }
    addrecrute(){
let data=this.myGroup.value
console.log(data)
let deman:Demande=new Demande()
deman.statut_chef="en cours"
deman.statut_ds="en cours"
deman.statut_rh="en cours"
deman.remarque=this.myGroup.value.remarque
deman.offre_id=this.idoffre
deman.employe_id=this.idemployer
deman.nb_a_exp=this.myGroup.value.nb_a_exp
deman.nature_contrat=this.myGroup.value.nature_contrat
console.log(deman)
this.demandeservice.addDemande(deman).subscribe(data=>{
  console.log(data)
})

    }
  }
