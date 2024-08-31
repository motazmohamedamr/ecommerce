import { Component, Input, OnInit } from '@angular/core';
import { ProductdataService } from 'src/assets/services/productdata.service';
import { Product } from '../models/product-vm';

@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.scss']
})

export class ClientCartComponent implements OnInit {
  products: Product[] = [];
  productId: number | undefined;
  ngOnInit(): void {
    this.products =  JSON.parse(localStorage.getItem('products') || '[]');
    console.log('products:', this.products);
  }
  increment(items: Product): void {
    // debugger
    items.amount += 1;
    this.updateLocalStorage();
    console.log( this.updateLocalStorage());
  }
  decrement(item: Product): void {
    if (item.amount > 0) {
      item.amount -= 1;
    }
    if (item.amount == 0) {
      this.removeItem(item);
      console.log( this.removeItem(item));
    } 
  else {
      this.updateLocalStorage();
    }
  }
  removeItem(item: Product): void {
    localStorage.removeItem(item.productId)
    console.log(localStorage.removeItem(item.productId)
  );}
  updateLocalStorage(): void {
    // debugger ;
    localStorage.setItem('products', JSON.stringify(this.products));
    console.log('products updated in local storage:', this.products);
  }
}
