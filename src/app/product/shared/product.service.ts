import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable() // 各クラスを使用させるデコレータ
export class ProductService {

  // http通信（型宣言）
  constructor(private http: HttpClient){}
  getProducts(): Observable<any> {
    return this.http.get('/api/v1/products');
  }

  getFindById(productId: string): Observable<any> {
    console.log('id:', productId);
    return this.http.get('/api/v1/products/' + productId)
  }
}