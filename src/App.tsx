import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const App: React.FC = () => {
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
