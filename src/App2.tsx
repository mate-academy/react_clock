import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  // #region state
  const [today, setToday] = useState(new Date());
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');
  const prevClockRef = useRef(clockName);
  // #endregion

  useEffect(() => {
    const tick = () => {
      setToday(new Date());
      if (hasClock) {
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }
    };

    const timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [hasClock]);

  useEffect(() => {
    const tick = setInterval(() => {
      const newName = getRandomName();

      if (hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${prevClockRef.current} to ${newName}`);
      }

      prevClockRef.current = newName;
      setClockName(newName);
    }, 3300);

    // const timerId = setInterval(tick, 3300);

    return () => {
      clearInterval(tick);
    };
  }, [hasClock]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
    };

    const handleLeftClick = () => {
      setHasClock(true);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleLeftClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleLeftClick);
    };
  }, []);

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
