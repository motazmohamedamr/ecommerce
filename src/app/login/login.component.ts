
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthLoginService } from 'src/assets/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthLoginService:AuthLoginService) { }
  user={
    email:"",
    password:""
  }
  loginUser(form:any)  {
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

