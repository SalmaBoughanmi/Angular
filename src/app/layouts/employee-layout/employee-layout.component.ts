import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit {


  constructor(private router:Router){}
  ngOnInit() {

  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")

  }
}
