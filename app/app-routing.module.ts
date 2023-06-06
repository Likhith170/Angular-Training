import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // Other routes...
  { path: '', component: HomeComponent },
  /*{ path: 'cart:id', component: CartPageComponent },*/
  { path:'products', component: ProductsComponent},
  { path:'about', component: AboutComponent},
  { path:'features', component: FeaturesComponent},
  { path:'contact', component: ContactComponent},
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  }


