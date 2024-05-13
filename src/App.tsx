import React, { useState, useEffect } from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  const handleOffClock = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(false);
  };

  const handleOnClock = () => {
    setHasClock(true);
  };

  useEffect(() => {
    const timerIdName = window.setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    document.addEventListener('contextmenu', handleOffClock);
    document.addEventListener('click', handleOnClock);

    return () => {
      window.clearInterval(timerIdName);
      document.removeEventListener('contextmenu', handleOffClock);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && <Clock name={clockName} />}
    </div>
  );
};
