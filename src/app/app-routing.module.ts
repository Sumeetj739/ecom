import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FooterComponent } from './footer/footer.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent },
    
  { path: 'seller-home', 
    component: SellerHomeComponent,
    canActivate:[authGuard]
   },
 
  { path: 'seller-auth', 
    component: SellerAuthComponent 
  
  },

  { path: 'seller-add-product', 
    component: SellerAddProductComponent,
    canActivate :[authGuard]
  
  },
  { path: 'seller-update-product/:id', 
    component: UpdateComponentComponent,
    canActivate :[authGuard]
  
  },
    { path: 'search/:query', 
    component: SearchComponent,
  
  },
  { path: 'details/:productId', 
    component: ProductDetailComponent,
  
  },
   { path: 'user-auth', 
    component: UserAuthComponent,
  
  },
   { path: 'footer', 
    component:FooterComponent,
  
  },
  { path: 'cart-page', 
    component:CartPageComponent,
  
  },
   { path: 'checkout', 
    component:CheckoutComponent,
  
  },
  { path: 'my-orders', 
    component:MyOrdersComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
