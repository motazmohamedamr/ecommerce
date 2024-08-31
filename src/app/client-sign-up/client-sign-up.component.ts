import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/assets/services/auth.service';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent {
  signUpUser: {} = {};
  constructor(private _AuthLoginService:AuthLoginService){}
  signUp :FormGroup = new FormGroup({
    email: new FormControl("",[ Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern( /^[A-Z][a-z0-9]{4,5}$/)]),
    confirmPassword: new FormControl("",[Validators.required,Validators.pattern( /^[A-Z][a-z0-9]{4,5}$/)])
  });
  
  signInClient():void{
    console.log(this.signUp.value);
    localStorage.setItem('signUpUser', JSON.stringify(this.signUp.value));
    alert(`${this.signUpUser} has been added to local storage.`);
  }
}
