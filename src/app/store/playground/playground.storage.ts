import { ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';
import { PlaygroundState, defaultPlaygroundState } from './playground.state';
import { playgroundFeatureKey } from './playground.reducer';

const PLAYGROUND_STORAGE_KEY = 'playground-state';

interface PlaygroundRootState {
  [playgroundFeatureKey]: PlaygroundState;
}

function isPlaygroundState(value: unknown): value is PlaygroundState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<PlaygroundState>;

  return (
    typeof candidate.html === 'string' &&
    typeof candidate.css === 'string' &&
    typeof candidate.js === 'string'
  );
}

export function loadPersistedPlaygroundState(): PlaygroundState {
  if (typeof localStorage === 'undefined') {
    return defaultPlaygroundState;
  }

  try {
    const storedState = localStorage.getItem(PLAYGROUND_STORAGE_KEY);

    if (!storedState) {
      return defaultPlaygroundState;
    }

    const parsedState = JSON.parse(storedState);

    if (!isPlaygroundState(parsedState)) {
      return defaultPlaygroundState;
    }

    return parsedState;
  } catch {
    return defaultPlaygroundState;
  }
}

function persistPlaygroundState(state: PlaygroundState): void {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem(PLAYGROUND_STORAGE_KEY, JSON.stringify(state));
}

export function createPlaygroundStorageMetaReducer(): MetaReducer<PlaygroundRootState> {
  return (reducer: ActionReducer<PlaygroundRootState>) => {
    return (state, action) => {
      const hydratedState =
        action.type === INIT || action.type === UPDATE
          ? {
              ...state,
              [playgroundFeatureKey]: loadPersistedPlaygroundState(),
            }
          : state;

      const nextState = reducer(hydratedState, action);

      persistPlaygroundState(nextState[playgroundFeatureKey]);

      return nextState;
    };
  };
}
