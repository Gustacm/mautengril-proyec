import { Component, input, Input, signal } from '@angular/core';
import catgory from '../../../interface/category-img';

@Component({
  selector: 'app-category-headings',
  imports: [],
  templateUrl: './category-headings.component.html',
  styleUrl: './category-headings.component.scss'
})
export class CategoryHeadingsComponent {
@Input() categories: string = '';
catgorysImg = catgory;

img(){

  for(let i = 0; i < this.categories.length; i++){
    if(this.catgorysImg[i].name === this.categories){
      return this.catgorysImg[i].img;
    }
  }

  return null;
}
 





}
