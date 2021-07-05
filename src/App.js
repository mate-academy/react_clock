import React from 'react';
import { Clock } from './Clock';
import './App.scss';

const App = () => (
  <div className="App">
    <h1 className="App__title">React clock</h1>
    <p className="App__time">Current time:</p>
    <p className="App__time-value">
      <Clock />
    </p>
  </div>
);

export default App;
