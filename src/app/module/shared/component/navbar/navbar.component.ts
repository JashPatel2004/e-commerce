import { Component, HostListener } from '@angular/core';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        NavContentComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        CommonModule,
        NavContentComponent]
})
export class NavbarComponent {
//profileMenu:any;
isNavbarContentOpen: any;
currentSection: any;

navigateTo(path:any) {

}

openNavbarContent(section:any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
}

closeNavbarContent(){
    this.isNavbarContentOpen = false;
}

@HostListener('document:click',['$event'])
onDocumentClick(event:MouseEvent){

    const modelContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button")

    let clickInsideButton = false;

    openButtons.forEach((button:Element)=>{
        if(button.contains(event.target as Node)){
            clickInsideButton = true;
        }
    });

    if(modelContainer && !clickInsideButton && this.isNavbarContentOpen){
        this.closeNavbarContent();
    }
}
}