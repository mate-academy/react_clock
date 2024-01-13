import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  // const today = new Date();

  // let clockName = 'Clock-0';

  // // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // // this code stops the timer
  // window.clearInterval(timerId);

  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock
        randomName={getRandomName}
      />
    </div>
  );
};
