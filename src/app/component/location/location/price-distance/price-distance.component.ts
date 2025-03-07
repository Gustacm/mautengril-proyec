import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../../services/location.service';
import { NameLocationService } from '../../../../services/name-location.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-price-distance',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './price-distance.component.html',
  styleUrl: './price-distance.component.scss'
})
export class PriceDistanceComponent implements OnInit {
  distanceMeters: string = '00.00';
  distanceKilometers: number = 0;
  shippingCost: number = 0;
  placeName: string = 'Cargando...';  

  constructor(
    private locationService: LocationService,
    private nameLocationService: NameLocationService
  ) {}

  async ngOnInit() {
    try {
      await this.locationService.getUserLocation();

      // 🔥 Suscribirse a los observables
      this.locationService.distanceMeters$.subscribe(value => {
        this.distanceMeters = value;
      });

      this.locationService.distanceKilometers$.subscribe(value => {
        this.distanceKilometers = value;
      });

      this.locationService.shippingCost$.subscribe(value => {
        this.shippingCost = value;
      });

      console.log(`📏 Distancia al local: ${this.distanceMeters} metros`);
      console.log(`📏 Distancia al local: ${this.distanceKilometers} km`);
      console.log(`🚚 Precio del envío: $${this.shippingCost}`);

      // 🔥 Obtener el nombre del sitio basado en la ubicación del usuario
      if (this.locationService.userLocation) {
        const [lon, lat] = this.locationService.userLocation;
        this.placeName = await this.nameLocationService.getPlaceName(lat, lon);
      }
    } catch (error) {
      console.error('❌ Error obteniendo la ubicación:', error);
      this.placeName = 'Ubicación no disponible';
    }
  }
}
