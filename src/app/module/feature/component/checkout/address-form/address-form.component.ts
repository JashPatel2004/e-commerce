import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddressCardComponent } from '../../../../shared/component/address-card/address-card.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule,AddressCardComponent,MatDividerModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  addresses=[1,1,1]

  handleCreateOrder(item:any){

  }

}
