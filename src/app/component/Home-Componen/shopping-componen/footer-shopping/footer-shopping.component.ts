import { Component, Input } from '@angular/core';

interface CartItem {
 
 image: string;
 name: string;
 precio: number;
 description: string;
 quantity: number;
}
@Component({
  selector: 'app-footer-shopping',
  imports: [],
  templateUrl: './footer-shopping.component.html',
  styleUrl: './footer-shopping.component.scss'
})

export class FooterShoppingComponent {
  @Input() Data: CartItem[] = [];


  getTotal(): number { 
    return this.Data.reduce((total, item) => total + item.precio * item.quantity, 0);
  }

  
}
