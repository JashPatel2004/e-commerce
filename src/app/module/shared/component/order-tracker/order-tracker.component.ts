import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [CommonModule,MatDividerModule,MatIconModule],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.scss'
})
export class OrderTrackerComponent {

  @Input() activeStep:any
  @Input() steps:any

}
