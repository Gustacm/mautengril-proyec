import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
import { SearchFilterComponent } from "../search-filter/search-filter.component";
import { CategoryFilterComponent } from "../category-filter/category-filter.component";

@Component({
  selector: 'app-display-filter',
  imports: [CommonModule, FormsModule, SearchFilterComponent, CategoryFilterComponent],
  templateUrl: './display-filter.component.html',
  styleUrl: './display-filter.component.scss'
})


export class DisplayFilterComponent {  


}
