import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from './../../app/models/product-vm';
@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

   private _url:string  ="../assets/productdata.json"

  constructor(private _HttpClient:HttpClient) { }


setLogin(userData:object):Observable<object>
{
  

  // return this._HttpClient.post<Produtcs[]>(this._url, userData);
  return this._HttpClient.get<Product[]>(this._url);

}
}
