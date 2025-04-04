import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavigationService } from '../../../services/navigation.service';
import { WishlistService } from '../../../services/wishlist.service';
@Component({
  selector: 'app-desktop-navigation',
  imports: [RouterLink, NgFor],
  templateUrl: './desktop-navigation.component.html',
  styleUrl: './desktop-navigation.component.css',
})
export class DesktopNavigationComponent {
  router = inject(Router);
  navigationService = inject(NavigationService);
  categories = this.navigationService.getCategories();
  wishlistItems = inject(WishlistService).getWishlistItems();

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.categories = this.navigationService.getCategories();
  }
}
