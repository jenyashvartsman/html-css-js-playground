import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { playgroundFeatureKey, playgroundReducer } from './store/playground/playground.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore({
      [playgroundFeatureKey]: playgroundReducer,
    }),
  ],
};
