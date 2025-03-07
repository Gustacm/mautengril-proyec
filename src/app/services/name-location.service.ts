import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NameLocationService {
  private readonly nominatimUrl = 'https://nominatim.openstreetmap.org/reverse';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene el nombre del lugar a partir de latitud y longitud.
   * @param lat Latitud del lugar
   * @param lon Longitud del lugar
   * @returns Promesa con el nombre del sitio
   */
  getPlaceName(lat: number, lon: number): Promise<string> {
    const url = `${this.nominatimUrl}?lat=${lat}&lon=${lon}&format=json`;

    return this.http.get<any>(url).toPromise()
      .then(response => {
        if (response?.display_name) {
          console.log("📍 Nombre del lugar:", response.display_name);
          return response.display_name;
        } else {
          throw new Error('No se encontró el nombre del lugar');
        }
      })
      .catch(error => {
        console.error("❌ Error obteniendo el nombre del sitio:", error);
        return 'Ubicación desconocida';
      });
  }
}
