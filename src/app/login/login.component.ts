
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  user={
    email:"",
    password:""
  }
  loginUser(form:any)  {
    //  console.warn(Item)
    // debugger
     console.log(form)
    }


}

