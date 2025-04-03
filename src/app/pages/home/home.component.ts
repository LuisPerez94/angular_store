import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  navigationService = inject(NavigationService);
  categories = this.navigationService.getCategories();
}
