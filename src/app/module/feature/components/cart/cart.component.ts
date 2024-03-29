import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "../../../share/components/cart-item/cart-item.component";
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [CommonModule, CartItemComponent,MatDividerModule]
})
export class CartComponent {

  constructor(private router: Router){

  }

cart = [1,1,1,1,1,1]

navigateToChechout() {
  this.router.navigate(["checkout"]); 
  }

}
