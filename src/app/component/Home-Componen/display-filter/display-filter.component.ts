import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
import { GlobalProductService } from '../../../global-product.service';
import { dataMenuJs } from '../../../interface/carta';
@Component({
  selector: 'app-display-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './display-filter.component.html',
  styleUrl: './display-filter.component.scss'
})


export class DisplayFilterComponent {  
  private dataMenu = inject(GlobalProductService);
  categories = ['All', ...this.dataMenu.categories()];
  selectedCategory = 'All';
  searchQuery = '';



  selectCategory(category: string) {
  this.dataMenu.filterByCategory(category);
    this.selectedCategory = category;

  }

}
