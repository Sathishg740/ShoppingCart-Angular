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
  item:any;
  constructor(private productService:ProductsService, private router:Router) { }
  items=[];
  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.product = data;
    });
  }
  addToCart(id:number){
    alert("Product successfully added to your cart")
    // this.router.navigate(['user/cart',id])
    console.log('id',id);
    this.item=this.product.filter(val=>val.id===id)
    console.log('product',this.item[0]);
    
    // localStorage.setItem('this.item', JSON.stringify(this.item));
    this.items.push(this.item[0])
    console.log('items set',this.items);
    localStorage.setItem('products', JSON.stringify(this.items));
    
    
    // this.item.push(this.items)
    // console.log('items',typeof( this.items));
    
    // localStorage.setItem("allEntries", JSON.stringify(this.items));
  }
  goToCartPage(){
    this.router.navigate(['user/cart'])

  }
}
