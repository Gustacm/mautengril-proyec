import { Component } from '@angular/core';
import { CardsComponent } from '../../component/Home-Componen/cards/cards.component';
import { CommonModule } from '@angular/common';
import { DisplayFilterComponent } from "../../component/Home-Componen/filter-Componet/display-filter/display-filter.component";
import { MatIconModule } from '@angular/material/icon';
import { DisplayFooterComponent } from "../../component/Home-Componen/footer/display-footer/display-footer.component";
import { HeaderComponent } from "../../component/Home-Componen/header-componet/header/header/header.component";
import { PriceDistanceComponent } from "../../component/location/location/price-distance/price-distance.component";


@Component({
  selector: 'app-home',
  imports: [CardsComponent, CommonModule, DisplayFilterComponent, MatIconModule, DisplayFooterComponent, HeaderComponent, PriceDistanceComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
