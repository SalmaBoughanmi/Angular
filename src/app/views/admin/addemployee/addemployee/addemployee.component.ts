import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

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

  };

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }
  addEmployee(){
    this.employeeService.addEmployee({ addEmployeeRequest: this.addEmployeeRequest })
    .subscribe({
      next:(employee) => {
      this.router.navigate(['admin/allemployees']);
      }
    });
  }

}
