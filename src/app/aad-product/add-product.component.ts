import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
 file :any;
 getFile(event:any){
    this.file = event.target.files[0];
    console.log( "file" ,  this.file);
 }
 generalInformation:  FormGroup =  new  FormGroup({
  productName: new  FormControl("",[ Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  description:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  productCategory: new FormControl(''),
  productStatus: new FormControl(''),
  productImage: new  FormControl(""),
  base: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  discountType: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  discount:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  taxClass: new FormControl(''),
  amount : new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  product:  new FormControl('' ,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  quantity: new FormControl(''),
  weight: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  height: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  length: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  width: new FormControl('hello',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),

 });

 

}
