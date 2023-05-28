import { Diplome } from 'src/app/models/diplome.model';
import { TechnologiesService } from './../../../../services/technologies.service';
import { CertificationService } from './../../../../services/certification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiplomeService } from 'src/app/services/diplome.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { Experience } from 'src/app/models/experience.model';
import { Technologie } from 'src/app/models/technologie.mpdel';
import { Certification } from 'src/app/models/certification.model';

@Component({
  selector: 'app-voir-profil',
  templateUrl: './voir-profil.component.html',
  styleUrls: ['./voir-profil.component.css']
})
export class VoirProfilComponent implements OnInit {
  listdiplome:any
  listcertif:any
  listtechno:any
  idemployer:any
  listexper:any
  diplome: Diplome[] = []
  experience: Experience[] = []
  technologie: Technologie[] = []
  Certification: Certification[] = []

    constructor( private employeeService: EmployeesService, private diplomeService: DiplomeService, private experienceService: ExperiencesService,
      private certifService: CertificationService, private technoService: TechnologiesService, private router: Router){
      this.idemployer=localStorage.getItem("iduser");
console.log(this.idemployer)
    }

  ngOnInit(): void {
  this.employeeService.getEmployee(this.idemployer).subscribe(data=>{
    // console.log(data)
    this.listdiplome=data.diplomes
    this.listcertif=data.certifications
    this.listexper=data.experiences
    this.listtechno=data.technologies
    // console.log(this.listdiplome)
    // console.log(this.listcertif)
    // console.log(this.listexper)
    // console.log(this.listtechno)

  })

  }

deleteDiplome(id: any){

    this.diplomeService.deleteDiplome(id)
   .subscribe((res:any)=>{
     this.ngOnInit()

   });
}

deleteExperience(id: any){

  this.experienceService.deleteExperience(id).subscribe((res:any)=>{
   this.ngOnInit()

 });


}

deleteCertif(id: any){

  this.certifService.deleteCertif(id)
 .subscribe((res:any)=>{
   this.ngOnInit()

 });
}

deleteTechnologie(id: any){

  this.technoService.deleteTechnologie(id)
 .subscribe((res:any)=>{
   this.ngOnInit()

 });
}



}
