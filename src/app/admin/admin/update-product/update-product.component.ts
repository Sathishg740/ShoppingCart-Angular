import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: any;
  product: Products = new Products();
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productsService.getProductId(this.id).subscribe(data => {
      this.product = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.productsService.updateProduct(this.id, this.product).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }

}
