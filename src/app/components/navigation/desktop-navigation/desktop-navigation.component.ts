import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavigationService } from '../../../services/navigation.service';
import { WishlistService } from '../../../services/wishlist.service';
import { WindowResizeService } from '../../../services/window-resize.service';
import { NgIf } from '@angular/common';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-desktop-navigation',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './desktop-navigation.component.html',
  styleUrl: './desktop-navigation.component.css',
})
export class DesktopNavigationComponent {
  router = inject(Router);
  navigationService = inject(NavigationService);
  categories = this.navigationService.getCategories();
  wishlistItems = inject(WishlistService).getWishlistItems();
  windowResizeService = inject(WindowResizeService);
  isMobile = this.windowResizeService.getIsMobile();
  isOpen = this.navigationService.getIsOpen();
  cartItems = inject(CartService).getCartItems();
  isCartOpen = inject(CartService).getIsCartOpen();
  toggleCart = inject(CartService).toggleCart;
  cartItemsCount = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.categories = this.navigationService.getCategories();
    this.isMobile = this.windowResizeService.getIsMobile();
  }
}
