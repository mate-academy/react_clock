import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');
  const timerId = useRef(0);

  const handleMouseRight = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    setHasClock(false);
  };

  const handleMouseLeft = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    setHasClock(true);
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleMouseRight);
    document.addEventListener('click', handleMouseLeft);
    timerId.current = window.setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    return () => {
      document.removeEventListener('contextmenu', handleMouseRight);
      document.addEventListener('click', handleMouseLeft);
      window.clearInterval(timerId.current);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock ? <Clock clockName={clockName} /> : ''}
    </div>
  );
};
