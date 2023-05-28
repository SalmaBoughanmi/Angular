import { EmployeesService } from './../../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandesService } from 'src/app/services/demandes.service';

@Component({
  selector: 'app-trait-chef',
  templateUrl: './trait-chef.component.html',
  styleUrls: ['./trait-chef.component.css']
})
export class TraitChefComponent  implements OnInit{
demande_id:any;
employe_id:any;
isShown: boolean = false ;

constructor(private activatedRoute:ActivatedRoute, public demandeService: DemandesService ,public employeService: EmployeesService, private router: Router){

  this.activatedRoute.paramMap.subscribe(
    params => {
      this. demande_id = params.get('demande_id');
      this. employe_id = params.get('employe_id');
    }
  );
}
ngOnInit(): void {console.log(this.demande_id)
  this.getDemande(this.demande_id);
  this.getEmployee(this.employe_id);
  console.log(this.demande_id,this.employe_id)
}
employeeDetails:any[]=[];
demandeDetails:any[]=[];
matches:any[]=[];
listtechno:any[]=[]
listcertif:any[]=[]
listdiplome:any[]=[]
employer:any
listexper:any[]=[]

experiences:any[]=[]
technologies:any[]=[]
diplomes:any[]=[]
certifications:any[]=[]
getDemande(demande_id:any){
 this.demandeService.getDemandeById(demande_id).subscribe((data:any)=>{
  this.demandeDetails=[data]
 })
}
getEmployee(employe_id:any){
 this.employeService.getEmployee(employe_id).subscribe((data:any)=>{
  this.employeeDetails=[data]
  this.getMatch(this.demandeDetails,this.employeeDetails)
})
}

getMatch(a:any[], b:any[]) {
  for(let i=0 ; i <  a.length ; i++){
    console.log('result 1', a[i])
    for(let j=0 ; j < b.length ; j++){
      console.log('result 2', b[j])
      let New=
        {
          nature_contrat:a[i].nature_contrat,
          nb_a_exp:a[i].nb_a_exp,
          remarque:a[i].remarque,
          nom:b[j].nom,
          prenom:b[j].prenom,
          fonction:b[j].fonction,
          diplomes:b[j].diplomes,
          technologies:b[j].technologies,
          certifications:b[j].certifications,
          experiences:b[j].experiences,
        }
      this.matches.push(New)
    }
  }
  this.experiences=this.matches[0].experiences;
  this.technologies=this.matches[0].technologies;
  this.diplomes=this.matches[0].diplomes;
  this.certifications=this.matches[0].certifications;
  console.log( this.experiences, this.technologies ,this.diplomes,this.certifications)
  let data = this.matches
  this.New_Form.setValue({
    nom:data[0].nom ,
    prenom:data[0].prenom ,
    fonction:data[0].fonction ,
    nb_a_exp:data[0].nb_a_exp ,
    nature_contrat:data[0].nature_contrat,
    remarque:data[0].remarque,
    motif_chef:""
  });
}

New_Form = new FormGroup({

  nom: new FormControl("", [Validators.required]),
  prenom: new FormControl("", [Validators.required]),
  fonction:new FormControl("", [Validators.required]),
  nb_a_exp:new FormControl("", [Validators.required]),
  nature_contrat:new FormControl("", [Validators.required]),
  remarque:new FormControl("", [Validators.required]),
  motif_chef:new FormControl("", [Validators.required]),
})
 accepter(){
  let statut:boolean=true
  let motif_chef=this.New_Form.controls.motif_chef.value;
  console.log(motif_chef)
  this.demandeService.gettraiterchef(this.demande_id, statut, motif_chef)
  .subscribe(data=>{
    console.log(data)
    this.router.navigateByUrl("/chef/dem-trait-chef")

    })
 }
 refuser(){
  let statut:boolean=false
  let motif_chef=this.New_Form.controls.motif_chef.value;
  console.log(motif_chef)
  this.demandeService.gettraiterchef(this.demande_id,statut, motif_chef)
  .subscribe(data=>{
    console.log(data)
    this.router.navigateByUrl("/chef/dem-trait-chef")

    })
 }

toggleShow() {

this.isShown= ! this.isShown
}

}
