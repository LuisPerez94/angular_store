import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { PdpCardButtonComponent } from '../../wishlist/pdp-card-button/pdp-card-button.component';
@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, RouterLink, PdpCardButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  isClient = typeof window !== 'undefined';
}
