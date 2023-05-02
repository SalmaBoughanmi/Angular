import { Employee } from './../../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employeeDetails: Employee = {
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

  constructor ( private route: ActivatedRoute, private employeeService:
    EmployeesService, private router: Router) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          if (id){
            this.employeeService.getEmployee(id)
            .subscribe({
              next: (response) =>{
                this.employeeDetails = response;
              }
            })
          }
        }
      })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.employe_id , this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/admin/allEmployees']);
      }
    })
  }

  }

