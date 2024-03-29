import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './module/feature/components/home/home.component';
import { FooterComponent } from './module/share/components/footer/footer.component';
import { NavbarComponent } from './module/share/components/navbar/navbar.component';
import { ProductsComponent } from "./module/feature/components/products/products.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, FooterComponent, ProductsComponent,NavbarComponent]
})
export class AppComponent {
  title = 'e-commerce';
}
