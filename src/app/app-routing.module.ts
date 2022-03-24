import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { OrderComponent } from './user/order/order.component';
import { ProductsComponent } from './user/products/products.component';
const routes: Routes = [
  {
    component:LoginComponent,
    path:''
  },
  {
    component:ProductsComponent,
    path:'user/productsList'
  },
  {
    component:CartComponent,
    path:'user/cart'
  },
  {
    component:CheckOutComponent,
    path:'user/checkOut/:id'
  },
  {
    component:OrderComponent,
    path:'user/order'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
