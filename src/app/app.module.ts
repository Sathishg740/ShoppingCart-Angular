import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { AdminModule } from './admin/admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminModule,
    FormsModule,
    ReactiveFormsModule,UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
