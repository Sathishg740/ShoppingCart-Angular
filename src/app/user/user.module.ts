import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderComponent } from './order/order.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    CheckOutComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [DatePipe],
})
export class UserModule { }
