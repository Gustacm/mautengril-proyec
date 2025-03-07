import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly osrmUrl = 'https://router.project-osrm.org/route/v1/driving';

  localLocation: [number, number] = [-71.6563411, -35.4286497]; // [longitud, latitud]
  userLocation: [number, number] | null = null;

  // 🔥 BehaviorSubjects para que los componentes se suscriban
  private distanceMetersSubject = new BehaviorSubject<string>('00.00');
  distanceMeters$ = this.distanceMetersSubject.asObservable();

  private distanceKilometersSubject = new BehaviorSubject<number>(0);
  distanceKilometers$ = this.distanceKilometersSubject.asObservable();

  private shippingCostSubject = new BehaviorSubject<number>(0);
  shippingCost$ = this.shippingCostSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {}

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      if (!isPlatformBrowser(this.platformId)) {
        console.warn('🌍 La geolocalización no está disponible en el servidor.');
        return reject('Geolocalización no disponible en el servidor.');
      }

      if (!navigator.geolocation) {
        console.error('❌ Geolocalización no soportada en este navegador.');
        return reject('Geolocalización no soportada.');
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = [position.coords.longitude, position.coords.latitude]; // ✅ [longitud, latitud]
          this.calculateDistanceAndShippingCost();
          resolve(this.userLocation);
        },
        (error) => {
          console.error('❌ Error obteniendo la ubicación:', error);
          reject(error);
        }
      );
    });
  }

  private calculateDistanceAndShippingCost(): void {
    if (!this.userLocation) return;

    const [lon1, lat1] = this.userLocation;
    const [lon2, lat2] = this.localLocation;

    const url = `${this.osrmUrl}/${lon1},${lat1};${lon2},${lat2}?overview=false`;

    console.log('📍 URL OSRM:', url);

    this.http.get<any>(url).subscribe(
      (response) => {
        console.log('📡 Respuesta OSRM:', response);

        if (!response?.routes?.length) {
          console.error('❌ OSRM no devolvió ninguna ruta.');
          return;
        }

        const distanceMeters = response.routes[0].distance;
        const distanceKilometers = distanceMeters / 1000;
        const shippingCost = this.calculateShippingCost(distanceKilometers);

        // 🔥 Emitir valores actualizados
        this.distanceMetersSubject.next(this.formatValue(distanceMeters));
        this.distanceKilometersSubject.next(distanceKilometers);
        this.shippingCostSubject.next(shippingCost);

        console.log(`📏 Distancia: ${this.formatValue(distanceMeters)} metros`);
        console.log(`🚚 Precio envío: $${shippingCost}`);
      },
      (error) => {
        console.error('❌ Error al obtener la ruta OSRM:', error);
      }
    );
  }

  private formatValue(value: number): string {
    return value.toFixed(2).padStart(5, '0');
  }

  private calculateShippingCost(km: number): number {
    if (km >= 0 && km <= 2.0) return 2000;
    if (km > 2.0 && km <= 4.0) return 2500;
    if (km > 4.0 && km <= 6.0) return 3000;
    if (km > 6.0 && km <= 8.0) return 3500;
    if (km > 8.0 && km <= 10.0) return 4000;
    return -1; // Tarifa especial para más de 10.5 km
  }
}
