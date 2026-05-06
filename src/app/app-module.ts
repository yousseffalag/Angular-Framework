import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Home } from './home/home';
import { AppRoutingModule } from './app-routing-module';
import { Product } from './product/product';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    App,
    Home,
    Product
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [App]
})
export class AppModule {}
