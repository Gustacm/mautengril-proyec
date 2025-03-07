import { Component, inject, Injector } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartComponent } from "../../shopping-componen/shopping-cart/shopping-cart.component";
import { ViewService } from '../../../../services/view.service';


@Component({
  selector: 'app-display-footer',
  imports: [MatIconModule, ShoppingCartComponent],
  templateUrl: './display-footer.component.html',
  styleUrl: './display-footer.component.scss'
})
export class DisplayFooterComponent {

  private injector = inject(Injector);
   private viewService = inject(ViewService);



  onHomeClick() {
    console.log('Home icon clicked');
    // Lógica para navegar a la página de inicio
  }

  onSearchClick() {
    console.log('Search icon clicked');
    // Lógica para abrir la búsqueda
  }

  onProfileClick() {
    this.viewService.setComponent(ShoppingCartComponent, this.injector);
    console.log('Profile icon clicked');
    // Lógica para navegar al perfil
  }

}
