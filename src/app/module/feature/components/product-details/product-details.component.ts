import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProductReviewCardComponent } from "./product-review-card/product-review-card.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { dressPage1 } from '../../../../../Data/dress/page1';
import { ProductCardComponent } from "../../../share/components/product-card/product-card.component";
import { StarRatingComponent } from "../../../share/components/star-rating/star-rating.component";
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    imports: [
        MatRadioModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        ProductReviewCardComponent,
        MatProgressBarModule,
        ProductCardComponent,
        StarRatingComponent,
        MatDividerModule
    ]
})
export class ProductDetailsComponent {

  selectedSize: any;
  reviews = [1,1,1];
  relatedProducts:any;

  constructor(private router: Router){

  }

  ngOnInit(){
    this.relatedProducts = dressPage1;
  }

  handleAddToCart() {
   this.router.navigate(["cart"]);
  }
}
