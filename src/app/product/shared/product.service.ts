import { Injectable } from "@angular/core";
import { products } from "../products";

@Injectable() // 各クラスを使用させるデコレータ
export class ProductService {
  getProducts() {
    return products;
  }

  getFindById(productId: number){
    return products[productId];
  }
}