import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
@Component({
  selector: 'app-display-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './display-filter.component.html',
  styleUrl: './display-filter.component.scss'
})


export class DisplayFilterComponent {  
  categories = ['All', 'Combos', 'Pizza', 'Sushi', 'Tacos', 'Hamburguesas'];
  selectedCategory = 'All';
  searchQuery = '';

  selectCategory(category: string) {
    this.selectedCategory = category;

  }

}
