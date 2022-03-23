import { Injectable } from '@angular/core';
import { Products } from '../admin/products';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }
  
  getProductList(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}`);
  }

  createProduct(product: Products): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }

  getProductId(id: number): Observable<Products>{
    return this.httpClient.get<Products>(`${this.baseURL}/${id}`);
  }

  updateProduct(id: number, product: Products): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
