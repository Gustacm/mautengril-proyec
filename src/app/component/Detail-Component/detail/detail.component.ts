import { Component, Inject, Input, inject } from '@angular/core';
import { ViewService } from '../../../services/view.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  quantity: number = 1;
  dataProduct: any;
  private cartService = inject(ShoppingCartService); 

  constructor(@Inject('productData') public product: any, private viewService: ViewService) {
    this.dataProduct = product;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ✅ Función para agregar al carrito
  addToCart() {
    if (!this.dataProduct) {
      console.error('Error: No hay producto para agregar');
      return;
    }

    this.cartService.addToCart({
      id: this.dataProduct.id,
      nombre: this.dataProduct.nombre, 
      precio: this.dataProduct.precio,
      Image: this.dataProduct.Image
    }, this.quantity);

    console.log(`Producto agregado: ${this.dataProduct.nombre} x${this.quantity}`);
  }

  hideDetail() {
    this.viewService.clearComponent(); 
  }
}
