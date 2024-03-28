import { Component } from '@angular/core';
import { OrderCardComponent } from './order-card/order-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderCardComponent,MatCheckboxModule,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  orderFilters=[
    {value:"on_the_way",label:"On The Way"},
    {value:"delivered",label:"Delivered"},
    {value:"cancelled",label:"Cancelled"},
    {value:"returned",label:"Returned"},
]
  orders=[[1,1],[1,1,1]]

  constructor(private router:Router){}

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`order/${id}`])
  }
}
