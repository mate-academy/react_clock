import React from 'react';
import { Clock } from './Components/Clock/Clock';

import './App.scss';

export const App = () => (
  <div className="app">
    <h1>React clock</h1>
    <Clock />
  </div>
);
