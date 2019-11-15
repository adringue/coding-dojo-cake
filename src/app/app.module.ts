import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { CakeSystemComponent } from './cake-system/cake-system.component';
import { DetailsComponent } from './details/details.component';
import {ProductsManagmentService} from "./products-managment.service";

@NgModule({
  declarations: [
    AppComponent,
    CakeSystemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ProductsManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
