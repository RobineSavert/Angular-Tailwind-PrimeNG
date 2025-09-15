import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { mergeApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';


const config = mergeApplicationConfig(appConfig, {
  providers: [
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
});

bootstrapApplication(App, config)
  .catch((err) => console.error(err));

