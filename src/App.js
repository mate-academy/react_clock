import React from 'react';

import './App.scss';
import { Clock } from './Components/Clock';

const App = () => (
  <div className="App">
    <h1>React clock</h1>
    <p>
      Current time:&nbsp;
      <Clock />
    </p>
  </div>
);

export default App;
