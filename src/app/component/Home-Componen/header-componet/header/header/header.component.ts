import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CarruselComponent } from "../../carrusel/carrusel.component";
import { PriceDistanceComponent } from "../../../../location/location/price-distance/price-distance.component";

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CarruselComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


}



