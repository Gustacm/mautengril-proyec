import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ViewService } from '../../../services/view.service';

@Component({
  selector: 'app-header-detail',
  imports: [],
  templateUrl: './header-detail.component.html',
  styleUrl: './header-detail.component.scss'
})
export class HeaderDetailComponent {

  
    constructor(private shoppingCartService: ShoppingCartService , private viewService: ViewService) {}

  goBack() {
    
    console.log("Regresando a la página anterior");
      this.viewService.clearComponent(); 
    
  }

  clearCart() {
    this.shoppingCartService.clearCart()
    console.log("Carrito vaciado");
  }
}


