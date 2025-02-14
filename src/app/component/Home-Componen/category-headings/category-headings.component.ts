import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-headings',
  imports: [],
  templateUrl: './category-headings.component.html',
  styleUrl: './category-headings.component.scss'
})
export class CategoryHeadingsComponent {
@Input() categories: string = '';



}
