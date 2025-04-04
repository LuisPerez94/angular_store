import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-pdp-button',
  imports: [],
  template: `
    @if (wishlistService.isInWishlist(product)) {
    <button
      (click)="removeFromWishlist()"
      class="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all duration-300 cursor-pointer"
    >
      <i class="material-icons">favorite</i> Remove from wishlist
    </button>
    } @else {
    <button
      (click)="addToWishlist()"
      class="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all duration-300 cursor-pointer "
    >
      <i class="material-icons">favorite_border</i> Add to wishlist
    </button>
    }
  `,
  styleUrl: './pdp-button.component.css',
})
export class PdpButtonComponent {
  @Input() product!: Product;
  wishlistService = inject(WishlistService);

  addToWishlist() {
    this.wishlistService.addToWishlist(this.product);
  }

  removeFromWishlist() {
    this.wishlistService.removeFromWishlist(this.product);
  }
}
