import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CreateProductComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    ProductListComponent,
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class AdminModule { }
