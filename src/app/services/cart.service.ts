import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem extends Product {
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  protected cartItems = signal<CartItem[]>([]);
  protected isCartOpen = signal<boolean>(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.syncWithLocalStorage();
    }
  }

  syncWithLocalStorage() {
    const storedItems = localStorage?.getItem('cart');
    if (storedItems) {
      this.cartItems.set(JSON.parse(storedItems));
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  addItemToCart(item: CartItem) {
    const existingItem = this.cartItems().find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.update((items) => [...items, item]);
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  removeItemFromCart(item: CartItem) {
    const existingItem = this.cartItems().find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        this.cartItems.update((items) => items.filter((i) => i.id !== item.id));
      }
    } else {
      this.cartItems.update((items) => items.filter((i) => i.id !== item.id));
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  clearCart() {
    this.cartItems.set([]);
    localStorage.removeItem('cart');
  }

  getTotalPrice() {
    return this.cartItems().reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getIsCartOpen() {
    return this.isCartOpen;
  }

  toggleCart() {
    this.isCartOpen.set(!this.isCartOpen());
  }

  getShippingPrice() {
    return 10;
  }
}
