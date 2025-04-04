import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems = signal<Product[]>([]);

  constructor(private toastr: ToastrService) {
    if (typeof window !== 'undefined') {
      this.syncWithLocalStorage();
    }
  }

  syncWithLocalStorage() {
    const storedItems = localStorage.getItem('wishlist');
    if (storedItems) {
      this.wishlistItems.set(JSON.parse(storedItems));
    }
  }

  getWishlistItems() {
    return this.wishlistItems;
  }

  isInWishlist(product: Product) {
    return (
      this.wishlistItems().find((item) => item.id === product?.id) !== undefined
    );
  }

  addToWishlist(product: Product) {
    this.wishlistItems.update((items) => [...items, product]);
    this.saveToLocalStorage();
    this.toastr.success('Producto agregado a la lista de deseos');
  }

  saveToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems()));
  }

  removeFromWishlist(product: Product) {
    this.wishlistItems.update((items) =>
      items.filter((item) => item.id !== product.id)
    );
    this.saveToLocalStorage();
    this.toastr.success('Producto eliminado de la lista de deseos');
  }

  clearWishlist() {
    this.wishlistItems.set([]);
    this.saveToLocalStorage();
    this.toastr.success('Lista de deseos vaciada');
  }
}
