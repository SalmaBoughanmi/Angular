import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-creer-profil',
  templateUrl: './creer-profil.component.html',
  styleUrls: ['./creer-profil.component.css']
})
export class CreerProfilComponent implements OnInit {
  addEmployeeRequest: Employee= {
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
    experiences: [],
    certifications: [],
    technologies: [],

  };

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }
  addEmployee(){
    this.employeeService.addEmployee({ addEmployeeRequest: this.addEmployeeRequest })
    .subscribe({
      next:(employee) => {
      this.router.navigate(['employee']);
      }
    });
  }

}
