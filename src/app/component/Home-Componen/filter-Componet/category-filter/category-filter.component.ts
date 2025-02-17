import { Component, inject } from '@angular/core';
import { GlobalProductService } from '../../../../global-product.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { iconCategory } from '../../../../interface/category-img';

@Component({
  selector: 'app-category-filter',
  imports: [CommonModule,MatIconModule],
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  private dataMenu = inject(GlobalProductService);
  categories = ['All', ...this.dataMenu.categories()]; 
  selectedCategory = 'All';
  categoryIcon = iconCategory


  selectCategory(category: string) {
    console.log(category);
    this.dataMenu.filterByCategory(category);
    this.selectedCategory = category;
  }
}
