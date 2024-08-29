
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthLoginService } from 'src/assets/services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthLoginService:AuthLoginService) { }

  // LoginForm:FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })
  user={
    email:"",
    password:""
  }
  loginUser(form:any)  {
    //  console.warn(Item)
    // debugger
     console.log(form)
     this._AuthLoginService.setLogin(this.user).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.error(error);
      }
     })
    }


}

