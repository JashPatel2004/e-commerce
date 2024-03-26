import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import { FeatureModule } from './module/feature/feature.module';
import { SharedModule } from './module/shared/shared.module';
import { AdminModule } from './module/admin/admin.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FeatureModule,SharedModule,AdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
