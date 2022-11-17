import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

class Mfe2Element extends HTMLElement {
  connectedCallback() {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
}
customElements.define('mfe2-element', Mfe2Element);
