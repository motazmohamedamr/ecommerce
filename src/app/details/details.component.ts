import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from 'src/assets/services/productdata.service';
import { Product } from 'src/app/models/product-vm';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  
product?:Product;

testId! : number 

  constructor(private _ActivatedRoute:ActivatedRoute,private productService:ProductdataService ){}
ngOnInit(): void {
  //      let productId =  this._ActivatedRoute.snapshot.params['id'];
  //      console.log(productId);
  //      this.productService.getProducts().subscribe(res =>{
  //       this.product=res.filter(product => product.productId === productId)[0]; 
  //       localStorage.setItem('id' ,this.product?.productId)     
  // }) 

    
  this._ActivatedRoute.params.subscribe(params => {
    this.testId = params['id']; 
    console.log('Test ID:', this.testId);
  });
  this. getProductById()
  
}
 

getProductById(){
  // debugger
  this.productService.getProductById(this.testId).subscribe((res:any)=>{
    this.product = res;
    console.log(res);
    console.log(this.testId); 
    console.log(this.product);
    
  })
}

addCart(id:any){
  localStorage.setItem('id',id)
  this.productService.addToCard(id).subscribe({
    next: (Response)=>{
      console.log(Response);
    },
    error: (error)=>{
      console.log(error);
    }
  })  
}
StoreProduct(): void {
  // debugger
   localStorage.setItem('product', JSON.stringify(this.product));
   console.log(this.product);
}
}




