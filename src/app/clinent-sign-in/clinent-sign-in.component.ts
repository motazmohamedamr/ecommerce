import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinent-sign-in',
  templateUrl: './clinent-sign-in.component.html',
  styleUrls: ['./clinent-sign-in.component.scss']
})
export class ClinentSignInComponent {
  signInUser: {} = {};
signIn :FormGroup = new FormGroup({
  email: new FormControl("",[ Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  password: new FormControl("",[Validators.required,Validators.pattern( /^[A-Z][a-z0-9]{4,5}$/)]),
});
signInClient():void{
  console.log(this.signIn.value);
  this.signInUser =  JSON.parse(localStorage.getItem('signUpUser') || '[]');
  console.log('signUpUser true:', this.signInUser);
}
}
