import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [hasClock, setHasClock] = useState(true);
  const [today, setToday] = useState(new Date());

  const oldName = useRef('Clock-0');

  const clickRight = (event: MouseEvent) => {
    event.preventDefault();
    setHasClock(false);
  };

  const clickLeft = () => {
    setHasClock(true);
  };

  useEffect(() => {
    const todayId = window.setInterval(() => {
      setToday(new Date());

      if (hasClock) {
        // eslint-disable-next-line no-console
        console.log(today);
      }
    }, 1000);

    const timerId = window.setInterval(() => {
      setClockName(getRandomName());

      if (hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${oldName.current} to ${getRandomName()}`);
      }

      oldName.current = getRandomName();
    }, 3300);

    document.addEventListener('contextmenu', clickRight);
    document.removeEventListener('click', clickLeft);

    return () => {
      window.clearInterval(todayId);
      window.clearInterval(timerId);
      document.removeEventListener('contextmenu', clickRight);
      document.addEventListener('click', clickLeft);
    };
  }, [hasClock]);

  return (
    <div className="App">
      {}
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
