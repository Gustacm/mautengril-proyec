import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { GlobalProductService } from '../../../global-product.service';
import { CategoryHeadingsComponent } from "../category-headings/category-headings.component";




@Component({
  selector: 'app-cards',
  imports: [CommonModule, CardComponent, CategoryHeadingsComponent],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {
    private dataMenu = inject(GlobalProductService);
    products = signal(this.dataMenu.noHotProducts());
    hotProducts = signal(this.dataMenu.hotProducts());
    categories = signal(this.dataMenu.categories());
    hotTyp="Hot Products";


onInit() {


  
}

constructor() {

  console.log("menu cards",this.dataMenu.hotProducts());
}




}