import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../../api/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Products=new Products();
  constructor(private productService:ProductsService,private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data =>{
      console.log(data);
      this.goToProductList();
    })
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}