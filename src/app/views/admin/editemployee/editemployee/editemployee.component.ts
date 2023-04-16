import { Employee } from './../../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

//editEmployee = new FormGroup({
 // nom: new FormControl(''),
 // prenom: new FormControl(''),
 // matricule: new FormControl(''),
 // matricule_resp: new FormControl(''),
 // fonction: new FormControl(''),
 // role: new FormControl(''),
 // compte_winds: new FormControl(''),
 // email: new FormControl(''),
 // date_recrutement: new FormControl(''),
//});
  //employee: any;

  constructor ( private route: ActivatedRoute, private employeeService:
    EmployeesService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'])
   // this.employee.getEmployee(this.route.snapshot.params['id']).subscribe((result: any)=>{
      //this.editEmployee = new FormGroup({
       // nom: new FormControl(result['name']),
        //prenom: new FormControl(result['prenom']),
        //matricule: new FormControl(result['matricule']),
        //matricule_resp: new FormControl(result['matricule_resp']),
        //fonction: new FormControl(result['fonction']),
        //role: new FormControl(result['role']),
       // compte_winds: new FormControl(result['compte_winds']),
       //email: new FormControl(result['email']),
       // date_recrutement: new FormControl(result['']),
     // })
   // })


    //this.id=this.route.snapshot.params['id'];
    //this.getOne();
     // }
     //getOne(){
    //this.employeeService.getone(this.id).subscribe(employee=>
      //{
        //this.employee = employee;

        //console.log(this.employee);
      //});



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

  deleteEmployee(id: number){
     this.employeeService.deleteEmployee(id)
     .subscribe({
      next: (response) => {
        this.router.navigate(['/admin/allEmployees']);
      }
     });
  }










  //updateEmployee()
    //this.employee.updateEmployee(this.route.snapshot.params['id'],this.editEmployee.value).subscribe((result: any)=>
     //console.log(result,"Emlpoyee mise à jour avec succès")
    //)};







 // updateEmployee(){
    //this.employeeService.updateEmployee(this.employeeDetails.employe_id, this.employeeDetails)
    //.subscribe({
      //next: (response) => {
       // this.router.navigate(['/admin/allemployees'])
     // }
   // });
 // }





}
