import { Injectable, signal } from '@angular/core';


interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
  ingredients: string[];
  comments: string;
  Image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart = signal<CartItem[]>([  {id: Math.random(),
    nombre: 'Hamburguesa  Pepperoni',
    precio: 15000,
    ingredients: [' tomate', 'queso mozzarella ',' pepperoni'],
    quantity: 1,
    comments: 'sin  cebolla',
    Image: 'https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/recetas/hamburguesa_portada.jpg',
       },]); 

  constructor() {}

  // Obtener el carrito completo
  getCart() {
    return this.cart(); 
  }

  // Agregar un producto al carrito
  addToCart(product: Omit<CartItem, 'quantity' | 'ingredients' | 'comments'>, quantity: number) {
    const cartItems = this.cart(); // Accedemos al carrito actual

    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        ...product,
        quantity: 1,
        ingredients: [],
        comments: ''
      });
    }

    this.cart.set(cartItems); // Actualizamos el carrito con el nuevo valor
  }

  // Quitar un producto del carrito
  removeFromCart(productId: number) {
    const updatedCart = this.cart().filter(item => item.id !== productId);
    this.cart.set(updatedCart); // Actualizamos el carrito con el nuevo valor
  }

  // Modificar la cantidad de un producto
  updateQuantity(productId: number, quantity: number) {
    const cartItems = this.cart();
    const item = cartItems.find(item => item.id === productId);

    if (item && quantity > 0) {
      item.quantity = quantity;
    }

    this.cart.set(cartItems); // Actualizamos el carrito
  }

  // Agregar un ingrediente extra
  addIngredient(productId: number, ingredient: string) {
    const cartItems = this.cart();
    const item = cartItems.find(item => item.id === productId);

    if (item && !item.ingredients.includes(ingredient)) {
      item.ingredients.push(ingredient);
    }

    this.cart.set(cartItems); // Actualizamos el carrito
  }

  // Quitar un ingrediente
  removeIngredient(productId: number, ingredient: string) {
    const cartItems = this.cart();
    const item = cartItems.find(item => item.id === productId);

    if (item) {
      item.ingredients = item.ingredients.filter(i => i !== ingredient);
    }

    this.cart.set(cartItems); // Actualizamos el carrito
  }

  // Agregar un comentario al producto
  addComment(productId: number, comment: string) {
    const cartItems = this.cart();
    const item = cartItems.find(item => item.id === productId);

    if (item) {
      item.comments = comment;
    }

    this.cart.set(cartItems); // Actualizamos el carrito
  }

  // Vaciar el carrito
  clearCart() {
    this.cart.set([]); // Establecemos el carrito vacío
  }

  // Obtener el total del carrito
  getTotal(): number {
    return this.cart().reduce((total, item) => total + item.precio * item.quantity, 0);
  }
}
