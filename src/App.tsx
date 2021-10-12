import React from 'react';
// import { isPropertySignature } from 'typescript';
import './App.scss';
import { Clock } from './components/clock';

const App: React.FC = () => {
  let isClockVisible= true;
  const showClock = () => {
    isClockVisible = true;
  }
  const hideClock = () => {
    isClockVisible = false;
  }
  return (
    <div className="App">
      <h1>React clock</h1>
      <p>
        Current time:
        {' '}
        {isClockVisible && <Clock />}
      </p>
      <button type="button" onClick={showClock}>
        Show
      </button>
      <button type="button" onClick={hideClock}>
        Hide
      </button>
    </div>
  );
};

export default App;
