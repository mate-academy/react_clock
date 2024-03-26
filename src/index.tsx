import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjusted import statement

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
