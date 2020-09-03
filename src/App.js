import React from 'react';

import './App.scss';
import Clock from './Clock';

const App = () => {
  return (
    <div className="App">
      <h1>React clock</h1>
      <p>
        Current time:
        {' '}
        <Clock />
      </p>
    </div>
  );
};

export default App;
