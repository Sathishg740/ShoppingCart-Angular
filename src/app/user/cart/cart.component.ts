import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/admin/admin/products';
import { ProductsService } from 'src/app/admin/api/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // id:any;
  // product:Products
  items:any[];
  // items1:any
  constructor(private router:Router,private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('products'));
    console.log('items',data);
    this.items=data;
    // const data1= localStorage.getItem('products');
    // console.log('items1',data1);

    // this.id = this.route.snapshot.params['id'];

    // this.product = new Products();
    // this.productService.getProductId(this.id).subscribe( data => {
    //   this.product = data;
    // });
  }
  removeItem(id:number){
    const index = this.items.findIndex(o => o.id ===id);

    if (index > -1) {
      this.items.splice(index, 1);
    }
    alert("Item was removed from the cart");
    
  }
  navigateToCheckOut(id:number){
    this.router.navigate(['user/checkOut',id])
  }
 
}
