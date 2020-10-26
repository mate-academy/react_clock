import React from 'react';
import Clock from './components/Clock';

import './App.scss';

const App = () => (
  <div className="App">
    <h1>React clock</h1>
    <p>
      Current time:
      {' '}
      <Clock />
    </p>
  </div>
);

export default App;
