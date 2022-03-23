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

  id:any;
  product:Products
  constructor(private router:Router,private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.product = new Products();
    this.productService.getProductId(this.id).subscribe( data => {
      this.product = data;
    });
  }
  navigateToCheckOut(id:number){
    this.router.navigate(['user/checkOut',id])
  }
}
