import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Certification } from 'src/app/models/certification.model';
import { Diplome } from 'src/app/models/diplome.model';
import { Technologie } from 'src/app/models/technologie.mpdel';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';
import { DiplomeService } from 'src/app/services/diplome.service';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { CertificationService } from 'src/app/services/certification.service';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-ajout-profil',
  templateUrl: './ajout-profil.component.html',
  styleUrls: ['./ajout-profil.component.css']
})
export class AjoutProfilComponent  implements OnInit {
  index:any=1;
  nomemployer:any
  prenomemployer:any
  compte_winds:any
  idemployer:any
  matricule:any
email:any
matricule_resp: any
  Mygroup!:FormGroup
  myDiplomeForm!:FormGroup
  diplomesForm: any;
  myCertifForm!:FormGroup
  certifsForm: any;
  myTechnoForm!:FormGroup
  technosForm: any;
  myExperienceForm!:FormGroup
  expsForm: any;
  constructor(private employeeService: EmployeesService, private router: Router , private fb: FormBuilder,
    private diplomeservice:DiplomeService, private certificationservice:CertificationService,
    private technologieservice:TechnologiesService, private experiencesservice:ExperiencesService)
   {
this.idemployer=localStorage.getItem("iduser");
console.log(this.idemployer)
   }

  ngOnInit(): void {
this.addformDiplome();
this.addformCertif();
this.addformTechno();
this.addformExp();
this.addform();
   this.getprofil()
  }
addformDiplome(){
  this.myDiplomeForm=this.fb.group({
  nom_diplome: ['', Validators.required],
  lieu_diplome: ['', Validators.required],
  })
}

addformCertif(){
  this.myCertifForm=this.fb.group({
  nom_certif: ['', Validators.required],

  })
}

addformTechno(){
  this.myTechnoForm=this.fb.group({
  nom_techno: ['', Validators.required],

  })
}

addformExp(){
  this.myExperienceForm=this.fb.group({
  poste: ['', Validators.required],
  entreprise: ['', Validators.required],
  date_debut: ['', Validators.required],
  date_fin: ['', Validators.required],

  })
}

addDiplome(){
  if (this.myDiplomeForm.invalid ||this.myDiplomeForm.value.length == 0){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Vérifier votre champs',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
  let data=this.myDiplomeForm.value
  console.log(data)
  let diplo:Diplome=new Diplome()
  diplo.employe_id=this.idemployer;
  diplo.lieu_diplome=this.myDiplomeForm.value.lieu_diplome
  diplo.nom_diplome=this.myDiplomeForm.value.nom_diplome
  console.log(diplo)
  this.diplomeservice.addDiplome(diplo).subscribe(data=>{
console.log(data)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Nouveau diplôme ajouté',
  showConfirmButton: false,
  timer: 3000
})
  })
  this.myDiplomeForm.reset()

}

addCertif(){
  if (this.myCertifForm.invalid ||this.myCertifForm.value.length == 0){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Vérifier votre champs',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
  let data=this.myCertifForm.value
  console.log(data)
  let certif:Certification=new Certification()
  certif.employe_id=this.idemployer;
  certif.nom_certif=this.myCertifForm.value.nom_certif
 console.log(certif)
  this.certificationservice.addCertif(certif).subscribe(data=>{
console.log(data)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Nouveau certificat ajouté',
  showConfirmButton: false,
  timer: 3000
})
  })
  this.myCertifForm.reset()

}


addTechnologie(){
  if (this.myTechnoForm.invalid ||this.myTechnoForm.value.length == 0){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Vérifier votre champs',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
  let data=this.myTechnoForm.value
  console.log(data)
  let techno:Technologie=new Technologie()
  techno.employe_id=this.idemployer;
  techno.nom_techno=this.myTechnoForm.value.nom_techno
 console.log(techno)
  this.technologieservice.addTechnologie(techno).subscribe(data=>{
console.log(data)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Nouvelle technologie ajoutée',
  showConfirmButton: false,
  timer: 3000
})
  })
  this.myTechnoForm.reset()

}


addExperience(){
  if (this.myExperienceForm.invalid ||this.myExperienceForm.value.length == 0){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Vérifier votre champs',
      showConfirmButton: false,
      timer: 2000
    })
    return;
  }
  let data=this.myExperienceForm.value
  console.log(data)
  let exp:Experience=new Experience()
  exp.employe_id=this.idemployer;
  exp.poste=this.myExperienceForm.value.poste;
  exp.entreprise=this.myExperienceForm.value.entreprise;
  exp.date_debut=this.myExperienceForm.value.date_debut;
  exp.date_fin=this.myExperienceForm.value.date_fin;
 console.log(exp)
  this.experiencesservice.addExperience(exp).subscribe(data=>{
console.log(data)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Nouvelle expérience ajoutée',
  showConfirmButton: false,
  timer: 3000
})
  })
  this.myExperienceForm.reset()
}
  addform(){
    this.Mygroup=this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],

      poste:['', Validators.required],
      entreprise:['', Validators.required],
      date_debut:['', Validators.required],
      date_fin:['', Validators.required],
      nom_certif:['', Validators.required],
      nom_techno:['', Validators.required],
      nom_diplome:['', Validators.required],
      lieu_diplome:['', Validators.required],
    })
  }
  getprofil(){
    this.employeeService.getEmployee(this.idemployer).subscribe(data=>{
      console.log(data)
      this.Mygroup.patchValue(data)
      this.nomemployer=data.nom
      this.prenomemployer=data.prenom
      this.matricule=data.matricule
      this.matricule_resp=data.matricule_resp
      this.email=data.email


    })
  }


 /* addEmployee(){
    // this.employeeService.addEmployee({ addEmployeeRequest: this.addEmployeeRequest })
    // .subscribe({
    //   next:(employee) => {
    //   this.router.navigate(['employee']);
    //   }
    // });
  }

  addchamp(){
    this.index=this.index+1
    console.log(this.index)
  }

  public get nomdiplome(): FormArray {
    return this.Mygroup.get('nom_diplome') as FormArray;

} public get lieudiplome(): FormArray {
  return this.Mygroup.get('lieu_diplome') as FormArray;
}

  public addTags(): void {
    this.lieudiplome.push(new FormControl());
    this.nomdiplome.push(new FormControl());
  }*/

}
