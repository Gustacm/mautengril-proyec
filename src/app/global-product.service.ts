import { Injectable, signal, computed } from '@angular/core';
import { Product } from './interface/Product.interface';
import { dataMenuJs } from './interface/carta';

@Injectable({
  providedIn: 'root'
})
export class GlobalProductService {

  menu = signal<Product[]>(dataMenuJs);
  menuStore = signal(this.menu());

  hotProducts = signal<Product[]>(this.menuStore().filter((product: Product) => product.isHot() === true));
  noHotProducts = signal<Product[]>(this.menuStore().filter((product: Product) => product.isHot() === false));

  categories = computed<string[]>(() => [...new Set(this.menuStore().map((product: Product) => product.category))]);

  constructor() {}


  filterByCategory(category: string) {
    const filteredMenu = category === "All" 
      ? this.menu() 
      : this.menu().filter((product: Product) => product.category === category);

    this.menuStore.set(filteredMenu);
    this.hotProducts.set(filteredMenu.filter(product => product.isHot()));
    this.noHotProducts.set(filteredMenu.filter(product => !product.isHot()));

   
  }




  filterBySearch(search: string) {
    // Normalizar la búsqueda: eliminar acentos, convertir a minúsculas y eliminar espacios innecesarios
    const normalizedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
      .toLowerCase()                  // Convertir a minúsculas
      .replace(/\s+/g, " ")           // Reemplazar múltiples espacios por un solo espacio
      .trim();                        // Eliminar espacios al principio y al final
  
    const filteredMenu = this.menu().filter((product: Product) => {
      // Normalizar y preparar todas las propiedades a buscar
      const normalizedProductName = product.nombre
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
  
      const normalizedDescription = product.descripcion
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
  
      const normalizedCategory = product.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
  
      const normalizedHotStatus = product.isHot().toString();  // Convertir el valor booleano a string
      const normalizedPrice = product.precio.toString();  // Convertir el precio a string si es numérico
      const normalizedRating = product.like.toString();  // Convertir el puntaje a string si es numérico
  
      // Verificar si alguno de los campos contiene la búsqueda
      return normalizedProductName.includes(normalizedSearch) ||
        normalizedDescription.includes(normalizedSearch) ||
        normalizedCategory.includes(normalizedSearch) ||
        normalizedHotStatus.includes(normalizedSearch) ||
        normalizedPrice.includes(normalizedSearch) ||
        normalizedRating.includes(normalizedSearch);
    });
  
    this.menuStore.set(filteredMenu);
    this.hotProducts.set(filteredMenu.filter(product => product.isHot()));
    this.noHotProducts.set(filteredMenu.filter(product => !product.isHot()));
  
    
  }
  
  
  
  
}
