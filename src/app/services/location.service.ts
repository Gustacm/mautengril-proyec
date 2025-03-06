import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  localLocation: [number, number] = [-35.4286497, -71.6563411]; 
  userLocation: [number, number] | null = null; 
  distanceMeters: string = '00.00'; 
  distanceKilometers: number = 0; // (sin formato)
  shippingCost: number = 0; 

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = [position.coords.latitude, position.coords.longitude]; 
          this.calculateDistanceAndShippingCost(); 
          resolve(this.userLocation);
        },
        (error) => reject(error)
      );
    });
  }

  // 🔥 Función para calcular distancia y costo de envío
  private calculateDistanceAndShippingCost(): void {
    if (!this.userLocation) return;

    const [lat1, lon1] = this.userLocation;
    const [lat2, lon2] = this.localLocation;
    
    const R = 6371000; // Radio de la Tierra en metros
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceMeters = R * c; // Distancia en metros
    this.distanceKilometers = distanceMeters / 1000; // Convertir a kilómetros

    // 🔥 Formatear distancia con dos ceros antes de la coma decimal
    this.distanceMeters = this.formatValue(distanceMeters);

    // 🔥 Asignar costo según la tabla de precios
    this.shippingCost = this.calculateShippingCost(this.distanceKilometers);
  }

  // 🔥 Función auxiliar para convertir grados a radianes
  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // 🔥 Formatear valor con "00.00"
  private formatValue(value: number): string {
    return value.toFixed(2).padStart(5, '0');
  }

  // 🔥 Asignar costo según la tabla de precios
  private calculateShippingCost(km: number): number {
    if (km >= 0 && km <= 2.0) return 2000;
    if (km > 2.0 && km <= 4.0) return 2500;
    if (km > 4.0 && km <= 6.0) return 3000;
    if (km > 6.0 && km <= 8.0) return 3500;
    if (km > 8.0 && km <= 10.0) return 4000;
    return -1; // 🔥 Tarifa especial para más de 10.5 km
  }
}
