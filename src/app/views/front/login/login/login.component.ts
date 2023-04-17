import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

employeeID: number;
loginUsers: any [] = [];
loginObj: any = {
  email: '',
  password:''
}


constructor(private localStorageService: LocalstorageService) {
  this.employeeID = this.localStorageService.getUserID();
}
saveUserID() {
  this.localStorageService.saveUserID(this.employeeID);
}

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
