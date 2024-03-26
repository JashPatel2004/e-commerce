import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../../../shared/component/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart=[1,1,1];
}
