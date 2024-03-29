import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() showButton: any;
  removeCartItem() {
    throw new
      Error('Method not implemented.');
  }

  updateCartItem(arg0: number) {
    throw new Error('Method not implemented.');
  }

}
