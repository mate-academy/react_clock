import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { ClockFC } from './components/clockFC';

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

export const AppFC: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName/* , setClockName */] = useState('Clock-0');
  const [prevClockName/* , setPrevClockName */] = useState<string | null>(null);
  const firstRender = useRef(true);

  const handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    setHasClock(false);
  };

  const handleShowClock = () => {
    setHasClock(true);
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleHideClock);
    document.addEventListener('click', handleShowClock);

    return () => {
      document.removeEventListener('contextmenu', handleHideClock);
      document.removeEventListener('click', handleShowClock);
      // console.log('closing useEffect');
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockName]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <ClockFC
          clockName={clockName}
          onUpdateToday={() => { }}
        />
      )}
    </div>
  );
};
