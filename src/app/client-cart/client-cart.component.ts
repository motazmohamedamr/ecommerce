import { Component, Input, OnInit } from '@angular/core';
import { ProductdataService } from 'src/assets/services/productdata.service';
import { Product } from '../models/product-vm';

@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.scss']
})
export class ClientCartComponent  implements OnInit{
  counterValue = 0
constructor(private _ProductdataService:ProductdataService){}
 
products: Product[] =[];

ngOnInit():void{
  this.getStoredProducts()
}
 increment(){
  this.counterValue++
 }
 decrement(){
  if(this.counterValue > 0){
    this.counterValue -=1
  } 
 }


 getStoredProducts(): void {
  debugger
  const storedProducts = localStorage.getItem('product');
  if (storedProducts ) {
    try {
      const parseProduct : Product[] = JSON.parse(storedProducts);
      if (Array.isArray(parseProduct)) {
        this.products = parseProduct
      }
     
    } catch (error) {
       this.products = [];
    }
    
    console.log('Products retrieved from localStorage:', this.products)
  }else{
    this.products = [];
  }
}



}
