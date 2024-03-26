import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule} from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import { filters, singleFilter } from './filterData';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio'
import { dressPage1 } from '../../../../../Data/dress/page1';
import { ProductCardComponent } from '../../../shared/component/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule,MatDividerModule,MatIconModule,CommonModule,MatCheckboxModule,MatRadioModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    filterData:any
    singleFilterData:any
    womenDress:any

    constructor(private router:Router,private activatedRoute:ActivatedRoute){}

    ngOnInit(){
      this.filterData=filters;
      this.singleFilterData=singleFilter
      this.womenDress=dressPage1
    }

    handleMultipleSelectFilter(value:string,sectionId:string){
      const queryParams={...this.activatedRoute.snapshot.queryParams};
      const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];
      const valueIndex=filterValues.indexOf(value);

      if(valueIndex!=-1){
        filterValues.splice(valueIndex,1)
      }
      else{
        filterValues.push(value);
      }

      if(filterValues.length>0){
        queryParams[sectionId]=filterValues.join(",");
      }
      else{
        delete queryParams[sectionId];
      }

      this.router.navigate([],{queryParams});
    }

    handleSingleSelectFilter(value:string,sectionId:string){
      const queryParams={...this.activatedRoute.snapshot.queryParams};
      queryParams[sectionId]=value;
      this.router.navigate([],{queryParams});
    }
   
}
