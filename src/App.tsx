import React, { useState, useEffect } from 'react';
import Clock from './components/Clock/Clock';
import { getRandomName } from './utils/getRandomName';
import './App.scss';

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  useEffect(() => {
    const hideClock = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
    };

    const showClock = () => {
      setHasClock(true);
    };

    document.addEventListener('contextmenu', hideClock);
    document.addEventListener('click', showClock);

    const nameTimer = setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    return () => {
      document.removeEventListener('contextmenu', hideClock);
      document.removeEventListener('click', showClock);
      clearInterval(nameTimer);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>
      {hasClock && <Clock name={clockName} />}
    </div>
  );
};
