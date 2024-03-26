import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './module/feature/component/home/home.component';
import { ProductsComponent } from './module/feature/component/products/products.component';
import { CartComponent } from './module/feature/component/cart/cart.component';
import { ProductDetailsComponent } from './module/feature/component/product-details/product-details.component';
import { CheckoutComponent } from './module/feature/component/checkout/checkout.component';
import { PaymentComponent } from './module/feature/component/payment/payment.component';
import { PaymentSuccessComponent } from './module/feature/component/payment-success/payment-success.component';
import { OrderComponent } from './module/feature/component/order/order.component';
import { OrderDetailsComponent } from './module/feature/component/order-details/order-details.component';
import { AdminRoutingModule } from './module/admin/admin-routing.module';

export const routes: Routes = [
    {path:"admin",loadChildren:()=>import("./module/admin/admin-routing.module").then(m=>AdminRoutingModule)},
    {path:"",component:HomeComponent},
    {path:"cart",component:CartComponent},
    {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"checkout/payment/:id",component:PaymentComponent},
    {path:":levelOne/:levelTwo/:levelThree",component:ProductsComponent},
    {path:"payment-success",component:PaymentSuccessComponent},
    {path:"account/orders",component:OrderComponent},
    {path:"order/:id",component:OrderDetailsComponent},
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
