import { Injectable, signal } from '@angular/core';
import { Product } from './interface/Product.interface';
import { dataMenuJs } from './interface/carta';



@Injectable({
  providedIn: 'root'
})
export class GlobalProductService {

  menu = signal <Product[] > (dataMenuJs);

  menuStore = signal(this.menu());

  hotProducts = signal <Product[] > (this.menuStore().filter((product: Product) => product.isHot() === true));
  noHotProducts = signal <Product[] > (this.menuStore().filter((product: Product) => product.isHot() === false));
  categories = signal <string[] > ([...new Set(this.menu().map((product: Product) => product.category))]);
  constructor() {}


 


  filterByCategory(category: string) {
  let resultado: Product[] = this.menu().filter((product: Product) => product.category === category);
  this.menuStore.update(() => [...resultado]);
  console.log("resultado",this.menuStore());
  return this.menuStore();


  }

}
