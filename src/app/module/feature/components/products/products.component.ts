import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'
import { filters, singleFilter } from './filterData';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from "../../../share/components/product-card/product-card.component";
import { ActivatedRoute, Router } from '@angular/router';
import { dressPage1 } from '../../../../../Data/dress/page1';


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    ProductCardComponent
  ]
})
export class ProductsComponent {
  sortMenu: any;
  filterData: any;
  singleFilterData: any;
  womenDress: any;

  constructor(private router:Router ,private activeRoute: ActivatedRoute) { }
  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.womenDress = dressPage1;
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {

    const queryParams = { ...this.activeRoute.snapshot.queryParams };

    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1)
    } else {
      filterValues.push(value)
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",")
    }else{
      delete queryParams[sectionId];
    }

    this.router.navigate([] , {queryParams});
  }

  handleSingleSelectFilter(value:string , sectionId:string){
    const queryParams = { ...this.activeRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([] , {queryParams});
  }

 
}
