import { Component, inject } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
@Component({
  selector: 'app-mobile-navigation',
  imports: [],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.css',
})
export class MobileNavigationComponent {
  isOpen = inject(NavigationService).getIsOpen();
  navigationService = inject(NavigationService);
  categories = this.navigationService.getCategories();

  toggleMenu() {
    this.navigationService.toggleMenu();
  }
}
