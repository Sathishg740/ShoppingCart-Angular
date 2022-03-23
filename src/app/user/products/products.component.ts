import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/admin/admin/products';
import { ProductsService } from 'src/app/admin/api/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:Products[];

  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.product = data;
    });
  }
  addToCart(id:number){
    
    this.router.navigate(['user/cart',id])
    console.log('id',id);
    
  }
}
