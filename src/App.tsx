import React, { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  let timerRandomNumber = 0;

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(false);
  };

  const handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(true);
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleLeftClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerRandomNumber = window.setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    return () => {
      window.clearInterval(timerRandomNumber);
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('click', handleLeftClick);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>
      {hasClock && <Clock name={clockName} />}
    </div>
  );
};
