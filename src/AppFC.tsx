import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { ClockFC } from './ClockFC';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const AppFC: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  const firstRender = useRef(true);
  const prevClockNameRef = useRef('Clock-0');

  const handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    setHasClock(false);
  };

  const handleLeftClick = (): void => {
    setHasClock(true);
  };

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setClockName(getRandomName());
    }, 3300);

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleLeftClick);

    return () => {
      window.clearInterval(timerId);
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('click', handleLeftClick);
    };
  }, []);
  // ^^ didMount, willUnmount

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (hasClock && prevClockNameRef.current !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockNameRef.current} to ${clockName}`);
    }

    prevClockNameRef.current = clockName;
  }, [hasClock, clockName]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <ClockFC clockName={clockName} />
      )}

    </div>
  );
};
