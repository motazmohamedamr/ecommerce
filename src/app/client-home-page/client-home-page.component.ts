import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product-vm';
import { ProductdataService } from 'src/assets/services/productdata.service';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
// interface Emp {

// }
export class ClientHomePageComponent implements OnInit, OnDestroy  {
 
   isLoding: boolean = false;

   data: Product[] =[];
   ngOnInit(): void {
   console.log("Start ngOnInit")
   }
   ngOnDestroy(): void {
       console.log("By Client Home")
   }
  constructor(private _ProductdataService:ProductdataService){
    console.log("Start Constructor")
        this.isLoding = true;
                this._ProductdataService.getProducts().subscribe((res:any)=>{
                  this.data = res;
                  console.log(res);
                  this.isLoding = false;
                })
                console.log(this._ProductdataService.getProducts())
        console.log(this._ProductdataService.getProducts())
        this._ProductdataService.getProducts().subscribe((res:any)=>{
          this.data = res;
          console.log(res);
        })
        this._ProductdataService.getProducts
   

  
}}