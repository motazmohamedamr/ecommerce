import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FillenProdatComponent } from './fillen-prodat/fillen-prodat.component';
import { LoginComponent } from './login/login.component';
 import { HttpClientModule } from '@angular/common/http';
import { AadProductComponent } from './aad-product/aad-product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClinentSignInComponent } from './clinent-sign-in/clinent-sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
     FillenProdatComponent ,
    SideBarComponent,
    LoginComponent,
    AadProductComponent,
    FooterComponent,
    NavbarComponent,
    ClientHomePageComponent,
    ClinentSignInComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
