import { Component, inject, Input } from '@angular/core';
import { ProductCardComponent } from '../../components/product/product-card/product-card.component';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Collection } from '../../models/collection.model';
@Component({
  selector: 'app-collection',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {
  http = inject(HttpClient);
  products: Product[] = [];
  @Input() categorySlug: string = '';
  navigationService = inject(NavigationService);
  route = inject(ActivatedRoute);
  collection: Collection | null = null;

  getCategoryId() {
    this.collection = this.navigationService.getCategoryBySlug(
      this.categorySlug
    );
    return this.collection?.id;
  }

  getProducts() {
    this.http
      .get<Product[]>(
        `https://api.escuelajs.co/api/v1/categories/${this.getCategoryId()}/products`
      )
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categorySlug = params['categorySlug'];
      this.getProducts();
    });
  }
}
