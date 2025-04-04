import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { ProductCardComponent } from '../../components/product/product-card/product-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, ProductCardComponent, NgFor],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  wishlistItems = inject(WishlistService).getWishlistItems();
}
