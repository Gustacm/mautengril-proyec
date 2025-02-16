import { Component, inject } from '@angular/core';
import { GlobalProductService } from '../../../../global-product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  private dataMenu = inject(GlobalProductService);
  categories = ['All', ...this.dataMenu.categories()]; 
  selectedCategory = 'All';

  selectCategory(category: string) {
    console.log(category);
    this.dataMenu.filterByCategory(category);
    this.selectedCategory = category;
  }
}
