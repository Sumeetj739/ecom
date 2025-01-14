import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CartComponent } from './cart/cart.component';
import { Auth2Service } from './auth2.service';
import { ErrorComponent } from './error/error.component';
import { PaymentComponent } from './payment/payment.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'Product',
    component:ProductComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'prDetail/:id',
    component:ProductDetailComponentComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
path:'register',
component:UserRegistrationComponent
  },
  {
    path:'profile',
    component:UserProfileComponent,
    canActivate: [Auth2Service]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate: [Auth2Service]
  },
  {
    path:'payment',
    component:PaymentComponent,
    canActivate: [Auth2Service]
  },
  {
    path:'prDetail/:id',
    component: ProductDetailComponentComponent
  }
  ,
  // {
  //   path:'**',
  //   component: ErrorComponent
  // },
  {
    path:'AllProducts',
    component:ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
