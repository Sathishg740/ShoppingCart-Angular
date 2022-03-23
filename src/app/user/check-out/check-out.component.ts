import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/admin/admin/products';
import { ProductsService } from 'src/app/admin/api/products.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

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
  navigateToOrder(){
    this.router.navigate(['user/order'])
  }
}
