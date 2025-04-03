import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() productSlug!: string;
  product!: Product;
  http = inject(HttpClient);

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
}
