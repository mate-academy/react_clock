import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [today, setToday] = useState(new Date().toUTCString().slice(-12, -4));
  const [clockName, setClockName] = useState('Clock-0');
  const [isClockDisplayed, setIsClockDisplayed] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(today.slice());
  }, [today]);

  document.addEventListener('contextmenu', event => {
    event.preventDefault();
    setIsClockDisplayed(false);
  });

  document.addEventListener('click', event => {
    event.preventDefault();
    setIsClockDisplayed(true);
  });

  useEffect(() => {
    if (!isClockDisplayed) {
      return;
    }

    const timerIdToday = window.setInterval(() => {
      setToday(new Date().toUTCString().slice(-12, -4));
    });

    return () => {
      window.clearInterval(timerIdToday);
    };
  }, [isClockDisplayed, today]);

  useEffect(() => {
    if (!isClockDisplayed) {
      return;
    }

    const timerIdName = window.setInterval(() => {
      const newClockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${clockName} to ${newClockName}`);

      setClockName(newClockName);
    }, 3300);

    return () => window.clearInterval(timerIdName);
  }, [clockName, isClockDisplayed]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {isClockDisplayed ? (
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">{today}</span>
        </div>
      ) : null}
    </div>
  );
};
