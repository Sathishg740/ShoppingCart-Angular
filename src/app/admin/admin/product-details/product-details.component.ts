import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../products';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any
  product: Products
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.product = new Products();
    this.productService.getProductId(this.id).subscribe( data => {
      this.product = data;
    });
  }

}
