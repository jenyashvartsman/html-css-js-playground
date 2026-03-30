export interface PlaygroundState {
  html: string;
  css: string;
  js: string;
}

export const defaultPlaygroundState: PlaygroundState = {
  html: '<button class="hello-button" id="hello-button">Say hello</button>',
  css: `.hello-button {
  border: 0;
  border-radius: 9999px;
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: white;
  padding: 0.85rem 1.4rem;
  font: 600 1rem/1.2 system-ui, sans-serif;
  box-shadow: 0 12px 30px rgba(20, 184, 166, 0.28);
  cursor: pointer;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
}`,
  js: `const helloButton = document.querySelector('#hello-button');

if (helloButton) {
  helloButton.addEventListener('click', () => {
    alert('hello');
  });
}`,
};

export const initialPlaygroundState: PlaygroundState = {
  ...defaultPlaygroundState,
};
