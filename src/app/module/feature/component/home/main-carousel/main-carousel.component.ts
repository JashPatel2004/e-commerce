import { Component, NgModule } from '@angular/core';
import { mainCarouselData } from './mainCarouselData';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})

export class MainCarouselComponent {
  carouselData:any
  currentSlide=0;
  interval:any;

  ngOnInit(){
    this.carouselData=mainCarouselData;
   //this.autoPlay();
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1)%this.carouselData.length;
  }
}
