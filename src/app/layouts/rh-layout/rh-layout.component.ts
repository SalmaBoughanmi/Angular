import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rh-layout',
  templateUrl: './rh-layout.component.html',
  styleUrls: ['./rh-layout.component.css']
})
export class RhLayoutComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(){

  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")

  }
}
