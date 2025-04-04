import { Component, Input, inject } from '@angular/core';
import { CartItem, CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-minicart-product-card',
  imports: [],
  templateUrl: './minicart-product-card.component.html',
  styleUrl: './minicart-product-card.component.css',
})
export class MinicartProductCardComponent {
  @Input() product!: CartItem;
  cartService = inject(CartService);

  removeFromCart() {
    this.cartService.removeItemFromCart(this.product);
  }

  incrementQuantity() {
    this.cartService.addItemToCart(this.product);
  }

  decrementQuantity() {
    this.cartService.removeItemFromCart(this.product);
  }
}
