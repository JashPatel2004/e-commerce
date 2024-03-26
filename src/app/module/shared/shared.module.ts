import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavContentComponent } from './component/navbar/nav-content/nav-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './component/product-card/product-card.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,MatIconModule,MatButtonModule,MatMenuModule,NavContentComponent,NavbarComponent,FooterComponent,ProductCardComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
