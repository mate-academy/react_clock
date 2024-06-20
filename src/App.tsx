import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const initialName = 'Clock-0';

  const [today, setToday] = useState(new Date());
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState(initialName);

  const prevClockNameRef = useRef(initialName);

  const handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(false);
  };

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(true);
  };

  useEffect(() => {
    const timerIdToday = window.setInterval(() => {
      setToday(new Date());

      if (hasClock) {
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }
    }, 1000);

    document.addEventListener('contextmenu', handleContextmenu);

    document.addEventListener('click', handleClick);

    const timerIdClockName = window.setInterval(() => {
      setClockName(getRandomName());

      if (hasClock) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevClockNameRef.current} to ${getRandomName()}`,
        );
      }

      prevClockNameRef.current = getRandomName();
    }, 3300);

    return () => {
      window.clearInterval(timerIdToday);
      document.removeEventListener('contextmenu', handleContextmenu);
      document.removeEventListener('click', handleClick);
      window.clearInterval(timerIdClockName);
    };
  }, [hasClock]);

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
