import { Component } from '@angular/core';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { womenTop } from '../../../../../Data/Women/women_top';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/shoes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,MainCarouselComponent,CommonModule,ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menJeans:any
  womenGowns:any
  womenTop:any
  mensKurta:any
  shoes:any

  ngOnInit(){
    this.menJeans=menJeans.slice(0,5);
    this.womenGowns=gounsPage1.slice(0,5);
    this.womenTop=womenTop.slice(0,5);
    this.mensKurta=mens_kurta.slice(0,5);
    this.shoes=mensShoesPage1.slice(0,5);
  }
}
