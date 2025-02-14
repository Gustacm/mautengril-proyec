import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  like=signal('dislike');
  colorLike=signal('rgba(255, 230, 0, 0.27)');
  products: any;
  
  
  @Input() date: any;

  ngOnInit() {
    this.products = this.date;
    console.log("este  es  es de la  card",this.products);
  }


  toggleLike() {
    if(this.like() === 'like') {
    this.like.set('dislike');
    this.colorLike.set('rgba(255, 230, 0, 0.27)');
  }
    else {
    this.like.set('like');
    this.colorLike.set('rgba(255, 230, 0, 0.51)');
    }
}
}