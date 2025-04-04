import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { DesktopNavigationComponent } from './components/navigation/desktop-navigation/desktop-navigation.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MobileNavigationComponent } from './components/navigation/mobile-navigation/mobile-navigation.component';
import { MinicartComponent } from './components/cart/minicart/minicart.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DesktopNavigationComponent,
    FooterComponent,
    BreadcrumbComponent,
    MobileNavigationComponent,
    MinicartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }
}
