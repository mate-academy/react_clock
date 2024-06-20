import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  // const today = new Date();
  const initialName = 'Clock-0';

  const [today, setToday] = useState(new Date());
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState(initialName);

  const prevClockNameRef = useRef(initialName);

  useEffect(() => {
    const timerIdToday = window.setInterval(() => {
      setToday(new Date());
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    const handleContextmenu = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
    };

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(true);
    };

    document.addEventListener('contextmenu', handleContextmenu);

    document.addEventListener('click', handleClick);

    const timerIdClockName = window.setInterval(() => {
      setClockName(getRandomName());
      prevClockNameRef.current = clockName;
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockNameRef.current} to ${clockName}`);
    }, 3300);

    return () => {
      window.clearInterval(timerIdToday);
      document.removeEventListener('contextmenu', handleContextmenu);
      document.removeEventListener('click', handleClick);
      window.clearInterval(timerIdClockName);
    };
  }, [clockName]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )}
    </div>
  );
};
