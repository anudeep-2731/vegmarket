import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
const routes: Routes =[
{path : 'checkout',component: CheckOutComponent},
{path : 'cart',component: ShoppingCartComponent},
{path : 'products/id',component: ProductDetailsComponent},
{path : 'products',component: ProductListComponent},
{path : '', redirectTo: '/products' , pathMatch: 'full'},
{path : '**', redirectTo: '/products' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckOutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
