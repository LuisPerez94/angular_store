import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { PdpButtonComponent } from '../../components/wishlist/pdp-button/pdp-button.component';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product',
  imports: [NgFor, PdpButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() productSlug!: string;
  product!: Product;
  http = inject(HttpClient);
  cartService = inject(CartService);
  selectedImage = signal<string>(this.product?.images[0] || '');

  ngOnInit() {
    this.http
      .get<Product>(
        `https://api.escuelajs.co/api/v1/products/slug/${this.productSlug}`
      )
      .subscribe((product) => {
        this.product = product;
        this.selectedImage.set(this.product.images[0]);
      });
  }

  addToCart(product: Product) {
    this.cartService.addItemToCart({
      ...product,
      quantity: 1,
    });
  }
}
