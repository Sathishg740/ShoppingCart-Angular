import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'product',component:ProductListComponent
  },
  {
    path:'product/createProduct',component:CreateProductComponent
  },
  {
    path:'',redirectTo:'product',pathMatch:'full'
  },
  {
    path:'updateProduct/:id',component:UpdateProductComponent
  },
  {
    path:'productDetails/:id',component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
