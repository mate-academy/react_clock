/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const clockName = useRef('Clock-0');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(true);
      console.log('left button');
      console.log(hasClock);
      if (event.button === 2) {
        setHasClock(false);
        console.log('right button');
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
      console.log('right button');
    };

    const timerClockName = window.setInterval(() => {
      const newName = getRandomName();
      console.debug(`Renamed from ${clockName.current} to ${newName}`);
      clockName.current = newName;
    }, 3300);

    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.clearInterval(timerClockName);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock
        hasClock={hasClock}
        clockName={clockName.current}
      />
    </div>
  );
};
