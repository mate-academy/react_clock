import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock
        randomName={getRandomName}
      />
    </div>
  );
};
