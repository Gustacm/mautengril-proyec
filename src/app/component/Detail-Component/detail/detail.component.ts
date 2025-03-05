import { Component, Inject, Input } from '@angular/core';
import { ViewService } from '../../../services/view.service';
@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  quantity: number = 2;

dataProduct:any;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  constructor(@Inject('productData') public product: any, private viewService: ViewService) {

    this.dataProduct = product;
  }

  hideDetail() {
    this.viewService.clearComponent(); // Esto destruirá el componente dinámico
  }


}
