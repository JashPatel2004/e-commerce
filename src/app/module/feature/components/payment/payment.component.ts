import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../share/components/address-card/address-card.component";
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "../../../share/components/cart-item/cart-item.component";
import {MatDividerModule} from '@angular/material/divider';

@Component({
    selector: 'app-payment',
    standalone: true,
    templateUrl: './payment.component.html',
    styleUrl: './payment.component.scss',
    imports: [
        AddressCardComponent,
        CommonModule,
        CartItemComponent,
        MatDividerModule,
    ]
})
export class PaymentComponent {
products = [1,1,1]

}
