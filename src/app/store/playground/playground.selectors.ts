import { createSelector } from '@ngrx/store';
import { selectCss, selectHtml, selectJs, selectPlaygroundState } from './playground.reducer';

export const selectPlayground = selectPlaygroundState;

export const selectPlaygroundCode = createSelector(
  selectHtml,
  selectCss,
  selectJs,
  (html, css, js) => ({
    html,
    css,
    js,
  }),
);
