import React, { useEffect, useRef, useState } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [hasClock, setHasClock] = useState(true);

  const firstRender = useRef(true);
  const prevClockName = useRef('Clock-0');

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
    };

    const handleLeftClick = () => setHasClock(true);

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

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (hasClock && prevClockName.current !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName.current} to ${clockName}`);
    }

    prevClockName.current = clockName;
  }, [hasClock, clockName]);

  return (
    <div className="App">
      <h1 className="App__title">React clock</h1>

      {hasClock && (
        <Clock clockName={clockName} />
      )}
    </div>
  );
};
