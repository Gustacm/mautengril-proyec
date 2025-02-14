export interface Product {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    like: number;
    category: string;
    isHot(): boolean;
  }
  

