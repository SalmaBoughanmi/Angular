import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-voir-profil-chef',
  templateUrl: './voir-profil-chef.component.html',
  styleUrls: ['./voir-profil-chef.component.css']
})
export class VoirProfilChefComponent implements OnInit{

  listdiplome:any
  listcertif:any
  listtechno:any
  idemployer:any
  listexper:any
    constructor( private employeeService: EmployeesService, private router: Router){
      this.idemployer=localStorage.getItem("iduser");
console.log(this.idemployer)
    }

  ngOnInit(): void {
  this.employeeService.getEmployee(this.idemployer).subscribe(data=>{
    console.log(data)
    this.listdiplome=data.diplomes
    this.listcertif=data.certifications
    this.listexper=data.experiences
    this.listtechno=data.technologies
    console.log(this.listdiplome)
    console.log(this.listcertif)
    console.log(this.listexper)
    console.log(this.listtechno)

  })

  }

}
