import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { FillenProdatComponent } from './fillen-prodat/fillen-prodat.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {path:"productList",component:ProductListComponent},
  {path:"fillenProdat",component:FillenProdatComponent},
  {path:"productPage",component:ProductPageComponent},
  {path:"sideBar",component:SideBarComponent},
  // {path:'**',component:SideBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { ProductPageComponent } from  './product-page/product-page.component';
exports: [RouterModule]
})
export class AppRoutingModule {
 }
