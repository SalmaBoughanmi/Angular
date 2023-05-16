import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-mes-dem',
  templateUrl: './mes-dem.component.html',
  styleUrls: ['./mes-dem.component.css']
})
export class MesDemComponent implements OnInit
{
iduser:any
listedemande:any

  constructor(private router:Router,private emmployerser:EmployeesService){}

  ngOnInit(): void {
this.getAll()
    this.iduser=localStorage.getItem('iduser')
    this.emmployerser.getAllmydemande(this.iduser).subscribe(data=>{
      console.log(data)
      this.listedemande=data
    })
    console.log(this.iduser)
  }


  getAll(){
    this.emmployerser.getAllmydemande(this.iduser).subscribe(data=>{
      console.log(data)
      this.listedemande=data
    })
  }
}
