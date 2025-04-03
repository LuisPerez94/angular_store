import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopNavigationComponent } from './components/navigation/desktop-navigation/desktop-navigation.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testing_app';

  changeTitle() {
    this.title = 'Hola Mundo';
  }
}
