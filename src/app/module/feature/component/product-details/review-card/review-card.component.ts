import { Component } from '@angular/core';
import { StarRatingComponent } from '../../../../shared/component/star-rating/star-rating.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {


}
