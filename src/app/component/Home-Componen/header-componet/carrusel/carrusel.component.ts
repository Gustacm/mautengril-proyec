import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  slides = [
    { id: 334, image: 'burguer.png', tex: 'Las mejores ofertas' },
    { id: 336, image: 'hot-dog.png', tex: 'Disfruta los mejores hot-dogs' },
    { id: 37, image: 'fajitas.png', tex: 'Sabores irresistibles' }
  ];

  currentIndex = 0;
  intervalId: any; // Variable para el intervalo del carrusel automático





  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
  }
}

