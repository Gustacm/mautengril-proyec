import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../../services/shopping-cart.service';
import { HeaderDetailComponent } from "../../../Detail-Component/header-detail/header-detail.component";
import { FooterShoppingComponent } from "../footer-shopping/footer-shopping.component";
import { ViewService } from '../../../../services/view.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
  imports: [HeaderDetailComponent, FooterShoppingComponent],
})
export class ShoppingComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private shoppingCartService: ShoppingCartService ,private viewService: ViewService) {}


  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getCart();
  }

  loadCart() {
    this.cartItems = this.shoppingCartService.getCart();
  }

  increaseQuantity(item: any) {
    this.shoppingCartService.updateQuantity(item.id, item.quantity + 1);
    this.loadCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      this.shoppingCartService.updateQuantity(item.id, item.quantity - 1);
      this.loadCart();
    }
  }
}
