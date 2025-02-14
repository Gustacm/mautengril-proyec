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
  categories = signal <string[] > (this.menuStore().map((product: Product) => product.category));
  constructor() {}


}
