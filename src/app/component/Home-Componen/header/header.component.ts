import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = 'Restaurante'; // Título dinámico
/*   @Input() cartCount: number = 0; // Número de elementos en el carrito
  @Output() menuToggled = new EventEmitter<void>(); // Evento para abrir/cerrar el menú
  @Output() cartOpened = new EventEmitter<void>(); // Evento para abrir el carrito

  toggleMenu() {
    this.menuToggled.emit(); // Emitir evento para abrir/cerrar el menú
  }

  openCart() {
    this.cartOpened.emit(); // Emitir evento para abrir el carrito
  }

 */
}




/* import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = 'Restaurante'; // Título dinámico
  @Input() cartCount: number = 0; // Número de elementos en el carrito
  @Output() menuToggled = new EventEmitter<void>(); // Evento para abrir/cerrar el menú
  @Output() cartOpened = new EventEmitter<void>(); // Evento para abrir el carrito

  toggleMenu() {
    this.menuToggled.emit(); // Emitir evento para abrir/cerrar el menú
  }

  openCart() {
    this.cartOpened.emit(); // Emitir evento para abrir el carrito
  }
} */