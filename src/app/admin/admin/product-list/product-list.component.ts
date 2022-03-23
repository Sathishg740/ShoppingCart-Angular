import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../../api/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product:Products[];
  createProduct:Products
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.product = data;
    });
  }

  productDetails(id: number){
    this.router.navigate(['productDetails', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['updateProduct', id]);
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProduct();
    })
  }
 

}
