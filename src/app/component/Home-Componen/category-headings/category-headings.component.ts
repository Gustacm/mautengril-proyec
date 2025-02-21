import { Component, input, Input, signal } from '@angular/core';
import { iconCategory } from '../../../interface/category-img';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-headings',
  imports: [MatIconModule],
  templateUrl: './category-headings.component.html',
  styleUrl: './category-headings.component.scss'
})
export class CategoryHeadingsComponent {
@Input() categories: string = '';





}
