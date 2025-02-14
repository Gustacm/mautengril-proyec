import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { GlobalProductService } from '../../../global-product.service';




@Component({
  selector: 'app-cards',
  imports: [CommonModule, CardComponent],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
    private dataMenu = inject(GlobalProductService);
    products = signal(this.dataMenu.noHotProducts());
    hotProducts = signal(this.dataMenu.hotProducts());




constructor() {

  console.log("menu cards",this.dataMenu.hotProducts());
}



}