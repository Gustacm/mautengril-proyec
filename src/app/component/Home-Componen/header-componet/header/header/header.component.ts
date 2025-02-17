import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CarruselComponent } from "../../carrusel/carrusel.component";

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CarruselComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


}



