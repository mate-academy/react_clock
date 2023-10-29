import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [hasClock, setHasClock] = useState(true);

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setHasClock(false);
  });

  document.addEventListener('click', () => {
    setHasClock(true);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date();

      if (newTime !== time) {
        if (hasClock) {
          // eslint-disable-next-line no-console
          console.info(time.toUTCString().slice(-12, -4));
        }

        setTime(newTime);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const [clockName, setClockName] = useState('Clock-0');

  useEffect(() => {
    const timerId = window.setInterval(() => {
      const newName = getRandomName();

      if (newName !== clockName) {
        setClockName(getRandomName());
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${clockName} to ${newName}`);
      }
    }, 3300);

    return () => {
      window.clearInterval(timerId);
    };
  }, [clockName]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock
      && (
        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {time.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )}
    </div>
  );
};
