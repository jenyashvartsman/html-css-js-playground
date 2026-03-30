import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PlaygroundActions = createActionGroup({
  source: 'Playground',
  events: {
    'Set HTML': props<{ html: string }>(),
    'Set CSS': props<{ css: string }>(),
    'Set JS': props<{ js: string }>(),
    Reset: emptyProps(),
  },
});
