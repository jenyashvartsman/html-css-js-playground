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

function escapeScriptContent(code: string): string {
  return code.replace(/<\/script/gi, '<\\/script');
}

export const selectPreviewContent = createSelector(
  selectHtml,
  selectCss,
  selectJs,
  selectHtmlError,
  selectCssError,
  selectJsError,
  (html, css, js, htmlError, cssError, jsError) => ({
    html: htmlError ? '' : html,
    css: cssError ? '' : css,
    js: jsError ? '' : js,
    htmlError,
    cssError,
    jsError,
  }),
);

export const selectPreviewDocument = createSelector(selectPreviewContent, ({ html, css, js }) => {
  const styleTag = css ? `<style>${css}</style>` : '';
  const scriptTag = js ? `<script>${escapeScriptContent(js)}<\/script>` : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${styleTag}
  </head>
  <body>
    ${html}
    ${scriptTag}
  </body>
</html>`;
});

export const selectPreviewStatus = createSelector(
  selectPreviewContent,
  ({ html, css, js, htmlError, cssError, jsError }) => {
    const skippedInputs = [
      htmlError ? 'HTML' : '',
      cssError ? 'CSS' : '',
      jsError ? 'JavaScript' : '',
    ].filter(Boolean);

    const hasRenderableContent = Boolean(html || css || js);

    if (!hasRenderableContent) {
      return {
        tone: 'idle',
        message: 'Add HTML, CSS, or JavaScript to see the preview.',
      };
    }

    if (skippedInputs.length === 0) {
      return {
        tone: 'ready',
        message: 'Preview is rendering the current valid inputs.',
      };
    }

    return {
      tone: 'warning',
      message: `${skippedInputs.join(', ')} ${
        skippedInputs.length === 1 ? 'is' : 'are'
      } invalid and not rendered in the preview.`,
    };
  },
);
