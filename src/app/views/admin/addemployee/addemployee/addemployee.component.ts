import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

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

  constructor() {}
  ngOnInit(): void {

  }

}
