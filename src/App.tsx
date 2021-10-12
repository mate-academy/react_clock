import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-Clock">
        <h1 className="App-Title">React clock</h1>
        <Clock />
      </div>
    </div>
  );
};

export default App;
