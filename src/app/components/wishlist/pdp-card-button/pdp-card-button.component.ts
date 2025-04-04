import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-pdp-card-button',
  imports: [],
  template: `
    <button
      class="cursor-pointer absolute top-2 right-2 z-10"
      (click)="isInWishlist ? removeFromWishlist() : addToWishlist()"
    >
      @if (isInWishlist) {
      <i class="material-icons">favorite</i>

      } @else {
      <span class="material-symbols-outlined"> favorite </span>
      }
    </button>
  `,
  styleUrl: './pdp-card-button.component.css',
})
export class PdpCardButtonComponent {
  @Input() product!: Product;
  isInWishlist = false;
  wishlistItems = inject(WishlistService).getWishlistItems();

  constructor(private wishlistService: WishlistService) {
    this.isInWishlist = this.wishlistService.isInWishlist(this.product);
  }

  ngOnInit() {
    this.isInWishlist = this.wishlistService.isInWishlist(this.product);
  }

  addToWishlist() {
    if (!this.isInWishlist) {
      this.wishlistService.addToWishlist(this.product);
      this.isInWishlist = this.wishlistService.isInWishlist(this.product);
    }
  }

  removeFromWishlist() {
    this.wishlistService.removeFromWishlist(this.product);
    this.isInWishlist = this.wishlistService.isInWishlist(this.product);
  }
}
