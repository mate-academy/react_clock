import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

const App: React.FC = () => {
  const date = new Date();
  const clockName = getRandomName();

  // This code starts a timer
  const timerId = window.setInterval(() => {
    // ...
  }, 1000);

  // this code stops the timer
  clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="clock">
        <strong>{clockName}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default App;
