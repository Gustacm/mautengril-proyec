import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalProductService } from '../../../../global-product.service';

@Component({
  selector: 'app-search-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {

 private dataMenu = inject(GlobalProductService);
  searchQuery = signal('');

  constructor() {
    
    effect(() => {
      const searchValue = this.searchQuery();
      if (searchValue) {
        this.dataMenu.filterBySearch(searchValue); 
      } else {
        
        this.dataMenu.filterBySearch('');  
      }
    });


}}
