import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
// import { FillenProdatComponent } from './fillen-prodat/fillen-prodat.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { AadProductComponent } from './aad-product/aad-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClinentSignInComponent } from './clinent-sign-in/clinent-sign-in.component';

const routes: Routes = [
  // {path:"productList",component:ProductListComponent},
  // {path:"fillen-Prodat",component:FillenProdatComponent},
  {path:"productPage",component:ProductPageComponent},
  // {path:"sideBar",component:SideBarComponent},
  // {path:'**',component:SideBarComponent}
  {path:"login",component:LoginComponent},
  {path:"aad-product",component:AadProductComponent, },
  {path:'navbar',component:NavbarComponent},
  {path:'client', component:ClientHomePageComponent},
  {path:'sign-in', component:ClinentSignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { ProductPageComponent } from  './product-page/product-page.component';
exports: [RouterModule]
})
export class AppRoutingModule {
 }
