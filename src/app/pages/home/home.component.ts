import { Component } from '@angular/core';
import { CardsComponent } from '../../component/Home-Componen/cards/cards.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CardsComponent,CommonModule,],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
