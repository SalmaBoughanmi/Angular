import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

role:any ;

myGroup!:FormGroup

constructor(private localStorageService: LocalstorageService , private loginservice:LoginService,private router:Router , private fb:FormBuilder  ) {

}


ngOnInit(): void {
  this.role=localStorage.getItem("roleuser")
  if (localStorage.getItem("user")===null){
    this.router.navigateByUrl("/login")
  }else {
if (this.role=='admin'){
  this.router.navigateByUrl("/admin")
}else if(this.role=='demandeur'){
  this.router.navigateByUrl("/employee")

}else if(this.role=='rh'){
  this.router.navigateByUrl("/rh")
}else if (this.role=='chef'){
  this.router.navigateByUrl("/chef")
}else{
  this.router.navigateByUrl("/ds")
}

  }
  this.addform()
}
addform(){
  this.myGroup=this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })
}

 onLogin(){
  let data =this.myGroup.value
  console.log(data)
  let mail=this.myGroup.value.email
  let pass=this.myGroup.value.password
  this.loginservice.login(mail,pass).subscribe(data=>{
    console.log(data)
    localStorage.setItem("user",JSON.stringify(data))
    localStorage.setItem("roleuser",data.role)
    localStorage.setItem("iduser",data.employe_id)
    this.role=localStorage.getItem("roleuser")
    if (this.role=='admin'){
      this.router.navigateByUrl("/admin")
    }else if(this.role=='demandeur'){
      this.router.navigateByUrl("/employee")

    }else if(this.role=='rh'){
      this.router.navigateByUrl("/rh")
    }else if (this.role=='chef'){
      this.router.navigateByUrl("/chef")
    }else{
      this.router.navigateByUrl("/ds")
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenu',
      showConfirmButton: false,
      timer: 1500
    })

  })

 }
}
