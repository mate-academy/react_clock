import React from 'react';
import { Clock } from './Clock';

import './App.scss';

const App = () => (
  <div className="App">
    <h1>React clock</h1>
    <p>Current time:</p>
    <p><Clock /></p>
  </div>
);

export default App;
