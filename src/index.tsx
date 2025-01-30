/* eslint-disable padding-line-between-statements */
// import { createRoot } from 'react-dom/client';
// import { App } from './App';

// createRoot(document.getElementById('root') as HTMLElement).render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './App.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
