import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() showButton:any;

  updateCartItem(num:number){
    
  }

  removeCartItem(){
    
  }
}
