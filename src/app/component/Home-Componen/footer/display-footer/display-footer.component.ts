import { Component, inject, Injector } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ViewService } from '../../../../services/view.service';
import { ShoppingCartComponent } from '../../shopping-componen/shopping-cart/shopping-cart.component';
import { ShoppingComponent } from '../../shopping-componen/shopping/shopping.component';

@Component({
  selector: 'app-display-footer',
  imports: [MatIconModule, ShoppingCartComponent],
  templateUrl: './display-footer.component.html',
  styleUrl: './display-footer.component.scss'
})
export class DisplayFooterComponent {

  private injector = inject(Injector);
  private viewService = inject(ViewService);


  onProfileClick() {
    this.viewService.setComponent(ShoppingComponent, this.injector);
  }

}