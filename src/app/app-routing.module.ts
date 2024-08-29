import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';import { NavbarComponent } from './navbar/navbar.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClinentSignInComponent } from './clinent-sign-in/clinent-sign-in.component';
import { AddProductComponent } from './aad-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { ClientCartComponent } from './client-cart/client-cart.component';

const routes: Routes = [
  {path:"productPage",component:ProductPageComponent},
  {path:"login",component:LoginComponent},
  {path:"add-product",component:AddProductComponent, },
  {path:'navbar',component:NavbarComponent},
  {path:'client', component:ClientHomePageComponent},
  {path:'sign-in', component:ClinentSignInComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"cart",component: ClientCartComponent}
  
];

AddProductComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
 }
