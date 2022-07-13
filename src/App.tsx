import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const date = new Date();
  const clockName = getRandomName();

  // This code starts a timer
  const timerId = window.setInterval(() => {
    // ...
  }, 1000);

  // this code stops the timer
  window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>

      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};
