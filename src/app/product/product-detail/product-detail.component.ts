import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  // 引数はクラスの依存関係
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ){ }

  ngOnInit(): void {

    // subscribe データの返却、エラー、正常の三つの引数がある。

    // paramsMap パラメータの変更を検知
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getFindById(params.get("productId")!)

      const productObservable = this.productService.getFindById(params.get("productId")!)
      productObservable.subscribe(
        (data) => {
          this.product = data;
          console.log("取得", data);
        },
        (err) => {
          console.log(err);
        },
      )
    });
  }
}
