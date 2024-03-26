import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './component/feature.component';
import { HomeComponent } from './component/home/home.component';
import { MainCarouselComponent } from './component/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './component/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './component/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './component/products/products.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [

  ], 
  imports: [
    CommonModule,HomeComponent,FeatureComponent,ProductsComponent,MatButtonModule,MatMenuModule,MatCheckboxModule
  ],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class FeatureModule { }
