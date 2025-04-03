import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
