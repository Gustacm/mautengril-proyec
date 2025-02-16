import { Component } from '@angular/core';
import { CardsComponent } from '../../component/Home-Componen/cards/cards.component';
import { CommonModule } from '@angular/common';
import { DisplayFilterComponent } from "../../component/Home-Componen/filter-Componet/display-filter/display-filter.component";



@Component({
  selector: 'app-home',
  imports: [CardsComponent, CommonModule, DisplayFilterComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
