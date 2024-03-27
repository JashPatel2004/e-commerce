import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddressCardComponent } from '../../../../shared/component/address-card/address-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule,AddressCardComponent,MatDividerModule,MatInputModule,MatSelectModule,MatFormFieldModule,ReactiveFormsModule,FormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  addresses=[1,1,1]
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipcode:["",Validators.required],
    mobile:["",Validators.required],
  })

  constructor(private formBuilder:FormBuilder){}

  handleSubmit=()=>{

  }

  handleCreateOrder(item:any){

  }

}
