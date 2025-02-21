import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  slides = [
    { id: 334, image: 'burguer.png', tex: 'Las mejores ofertas' },
    { id: 336, image: 'hot-dog.png',tex: 'Las mejores ofertas'  },
    { id: 37, image: 'fajitas.png',  }
  ];
  currentIndex = 0;
  intervalSubscription: Subscription = new Subscription();

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

 /*  ngOnInit() {
    console.log('ngOnInit llamado');
  }

  ngAfterViewInit() {
    // Usamos ngAfterViewInit para iniciar el intervalo
    console.log('Carrusel View Initialized');
    this.intervalSubscription = interval(9000).subscribe(() => {
      console.log('Changing slide');
      this.nextSlide();
    });
  } */

/*   ngOnDestroy() {
    console.log('Carrusel Component Destroyed');
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      console.log('Intervalo cancelado');
    }
  } */
}


  
  
  
/*   ngOnDestroy() {
console.log('CarruselComponent destruido');
if (this.intervalSubscription) {
  this.intervalSubscription.unsubscribe();
  console.log('Intervalo cancelado');
} */
