import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideToastr({
      closeButton: true,
      timeOut: 1500,
      progressBar: false,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass: 'toast-bottom-left',
    }),
  ],
};
