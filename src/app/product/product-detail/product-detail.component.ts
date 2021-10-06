import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  // 引数はクラスの依存関係
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // subscribe データの返却、エラー、正常の三つの引数がある。
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")!]
    })
  }
}
