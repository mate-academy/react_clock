import React, { useState, useEffect } from 'react';
import './App.scss';
import { Clock } from './components/relogio';

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');

  const getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setClockName(prev => {
        const newName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prev} to ${newName}`);

        return newName;
      });
    }, 3300);

    return () => clearInterval(intervalId); // evita múltiplos intervalos
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock name={clockName} />
    </div>
  );
};
