export interface PlaygroundState {
  html: string;
  css: string;
  js: string;
}

export const defaultPlaygroundState: PlaygroundState = {
  html: '',
  css: '',
  js: '',
};

export const initialPlaygroundState: PlaygroundState = {
  ...defaultPlaygroundState,
};
