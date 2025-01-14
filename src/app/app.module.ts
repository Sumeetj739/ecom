import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ErrorComponent } from './error/error.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductManagmentComponent } from './product-managment/product-managment.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    ProductComponent,
         HomeComponent,
         ProductDetailComponentComponent,
         LoginComponent,
         CartComponent,
         UserRegistrationComponent,
         ErrorComponent,
         PaymentComponent,
         ProductManagmentComponent,
         UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
