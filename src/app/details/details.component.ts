import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from 'src/assets/services/productdata.service';
import { Product } from 'src/app/models/product-vm';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 
testId! : string   
  @Input() product?: Product;  
  selectedProduct: Product | undefined;
  errorMessage: string = '';
  products: Product[] = [];
  constructor(
    private _productService: ProductdataService,
    private _activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadProduct();
    this.orderItems();
  }
  loadProduct(): void {
    const id = this._activateRoute.snapshot.params['id'];
    this._productService.getProductById(id).subscribe(
      (res) => {
        if (res || res == !id) {
          this.product = res;
          console.log('Product data:', this.product);
        } else {
          this.errorMessage =` Products  id ${id} not found.`;
        }
      },
      (error: any) => {
        this.errorMessage = ` retrieving the product: ${error.message}`;
      }
    );
  }
  orderItems(): void {
    const storedItems = localStorage.getItem('products');
    this.products = storedItems ? JSON.parse(storedItems) : [];
    console.log('products items:', this.products);
  }
  addToCart(): void {
    if (!this.product) return;
    const existingItem = this.products.find((item) => item.productId == this.product?.productId);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      this.products.push({ ...this.product });
    }
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}



