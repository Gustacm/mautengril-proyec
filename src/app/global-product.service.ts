import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalProductService {
  products = signal([
    {
      id: 1,
      nombre: 'Pizza Pepperoni',
      precio: 15000,
      descripcion: 'Pizza con base de tomate, queso mozzarella y pepperoni',
      like: 0.8,
      isHot() {
        return this.like > 4;
      }
    },
    {
      id: 2,
      nombre: 'Sushi Roll',
      precio: 12000,
      descripcion: 'Rollos de sushi con salmón, aguacate y queso crema',
      like: 4.2,
      isHot() {
        return this.like > 4;
      }
    },
    {
      id: 3,
      nombre: 'Tacos al Pastor',
      precio: 8000,
      descripcion: 'Tacos con carne de cerdo marinada y piña',
      like: 3.9,
      isHot() {
        return this.like > 4;
      }
    },
    {
      id: 4,
      nombre: 'Hamburguesa BBQ',
      precio: 18000,
      descripcion: 'Hamburguesa de carne de res con salsa BBQ y cebolla caramelizada',
      like: 4.6,
      isHot() {
        return this.like > 4;
      }
    },
    {
      id: 5,
      nombre: 'Ensalada César',
      precio: 10000,
      descripcion: 'Lechuga fresca con pollo, queso parmesano y aderezo César',
      like: 3.5,
      isHot() {
        return this.like > 4;
      }
    }
  ]);



  constructor() { }
}
