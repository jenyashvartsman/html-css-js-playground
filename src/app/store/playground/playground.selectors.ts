import { createSelector } from '@ngrx/store';
import { selectCss, selectHtml, selectJs, selectPlaygroundState } from './playground.reducer';
import { PlaygroundValidation } from './playground.validation';

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

export const selectHtmlError = createSelector(selectHtml, PlaygroundValidation.html);

export const selectCssError = createSelector(selectCss, PlaygroundValidation.css);

export const selectJsError = createSelector(selectJs, PlaygroundValidation.js);
