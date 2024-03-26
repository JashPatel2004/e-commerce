import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReviewCardComponent } from './review-card/review-card.component';
import { MatProgressBarModule} from '@angular/material/progress-bar'
import { sareePage1 } from '../../../../../Data/Saree/page1';
import { ProductCardComponent } from '../../../shared/component/product-card/product-card.component';
import { StarRatingComponent } from '../../../shared/component/star-rating/star-rating.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatRadioModule,FormsModule,ReviewCardComponent,CommonModule,MatProgressBarModule,ProductCardComponent,StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  selectedSize:any;
  reviews=[1,1,1];
  relatedProducts:any;

  constructor(private router:Router){

  }

  ngOnInit(){
    this.relatedProducts=sareePage1;
  }

  handleAddToCart(){
    this.router.navigate(['cart']);
  }
}
