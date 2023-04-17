import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// function
loginUsers: any [] = [];
loginObj: any = {
  email: '',
  password:''
}

constructor() {}

ngOnInit(): void {

}
 onLogin(){
  debugger
  const isUserExist = this.loginUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj);
   if (isUserExist != undefined){
    alert('Connexion avec succès');
   }
  else {
    alert('La connexion a échoué')
  }
   }
 }
