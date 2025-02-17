import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-display-footer',
  imports: [MatIconModule],
  templateUrl: './display-footer.component.html',
  styleUrl: './display-footer.component.scss'
})
export class DisplayFooterComponent {
  onHomeClick() {
    console.log('Home icon clicked');
    // Lógica para navegar a la página de inicio
  }

  onSearchClick() {
    console.log('Search icon clicked');
    // Lógica para abrir la búsqueda
  }

  onProfileClick() {
    console.log('Profile icon clicked');
    // Lógica para navegar al perfil
  }

}
