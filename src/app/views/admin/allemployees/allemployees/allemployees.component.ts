import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css'],
})
export class AllemployeesComponent implements OnInit {
  baseApiUrl: string = environment.baseApiUrl;

  dtoption: DataTables.Settings = {};
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
  dtrigger:Subject <any>=new Subject <any>()
  employees: Employee[] = [];
  constructor(
    private employeesService: EmployeesService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtoption = {
      pagingType: 'full_numbers',
      searching:true,
      lengthChange:false
    };
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.dtrigger.next(null)
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['/admin/editemployee/' + id]);
  }
  deleteEmployee(id: number) {
    this.employeesService.deleteEmployee(id).subscribe((res: any) => {
      this.getAllEmployee();
    });
  }
}
