import { createFeature, createReducer, on } from '@ngrx/store';
import { PlaygroundActions } from './playground.actions';
import { initialPlaygroundState } from './playground.state';

export const playgroundFeatureKey = 'playground';

export const playgroundFeature = createFeature({
  name: playgroundFeatureKey,
  reducer: createReducer(
    initialPlaygroundState,
    on(PlaygroundActions.setHTML, (state, { html }) => ({
      ...state,
      html,
    })),
    on(PlaygroundActions.setCSS, (state, { css }) => ({
      ...state,
      css,
    })),
    on(PlaygroundActions.setJS, (state, { js }) => ({
      ...state,
      js,
    })),
    on(PlaygroundActions.reset, () => initialPlaygroundState),
  ),
});

export const {
  name: playgroundFeatureName,
  reducer: playgroundReducer,
  selectPlaygroundState,
  selectHtml,
  selectCss,
  selectJs,
} = playgroundFeature;
