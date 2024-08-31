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
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClinentSignInComponent } from './clinent-sign-in/clinent-sign-in.component';
import { AddProductComponent } from './aad-product/add-product.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ClientCartComponent } from './client-cart/client-cart.component';
import { LoadingService } from 'src/assets/services/loding.service';
import { httpLoadingInterceptor } from './my-http.interceptor';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductPageComponent,
     FillenProdatComponent ,
    SideBarComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    ClientHomePageComponent,
    ClinentSignInComponent,
    AddProductComponent,
    DetailsComponent,
    ClientCartComponent,
    LoadingComponentComponent,
    ClientSignUpComponent
    
  ],

  imports: [
 

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [provideHttpClient(withInterceptors([httpLoadingInterceptor])),
  LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
