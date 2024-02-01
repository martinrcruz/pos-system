import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
    ) { }

  private apiUrl = environment.apiUrl;

  getProducts(){
    return this.http.get(`${this.apiUrl}/product/listProducts`);
  }
}
