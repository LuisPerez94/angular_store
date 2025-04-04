import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { NgFor } from '@angular/common';
import { MinicartProductCardComponent } from '../minicart-product-card/minicart-product-card.component';
@Component({
  selector: 'app-minicart',
  imports: [NgFor, MinicartProductCardComponent],
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.css',
})
export class MinicartComponent {
  cartService = inject(CartService);
  isCartOpen = this.cartService.getIsCartOpen();

  toggleCart() {
    this.cartService.toggleCart();
  }
}
