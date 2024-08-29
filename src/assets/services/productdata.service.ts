import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Product } from 'src/app/models/product-vm';


@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  products:Product[] = []
   private _url:string  ="../assets/productdata.json"
   
  constructor(private _HttpClient: HttpClient) { }
  getProducts():Observable <Product[]> 
  {
    return this._HttpClient.get<Product[]>(this._url);

  }
  // getProductDetails(id:string){
  //   this._HttpClient.get<Produtc[]>(`../assets/productdata.json/${id}`)
  // }

  getProductById(id: number): Observable<Product> {
    return this._HttpClient.get<Product[]>(this._url).pipe(
      map((products) => {
        // debugger
        const product = products.find((p:Product) => p.productId == id);
        if (product) {
          return product;
        } else {
          throw new Error('Product not found');
        }
      }),
      catchError((error) => {
        console.error('Error fetching product:', error);
        return throwError(() => new Error('Error fetching product'));
      }),
    );
  }





      headers: any ={id:localStorage.getItem('id')}

     addToCard(id:number):Observable <any> {
   
     return this._HttpClient.post(this._url ,
      {productId:id},
      {
        headers:this.headers
      }
    )
  }

  
    }

  
  



   


