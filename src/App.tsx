import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [today, setToday] = useState(new Date());
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setToday(new Date());

      // eslint-disable-next-line no-console
      console.info(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [today]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setClockName(getRandomName());

      // eslint-disable-next-line no-console
      console.info(getRandomName());
    }, 3300);

    return () => {
      window.clearInterval(timerId);
    };
  }, [clockName]);

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setIsHidden(false);
  });

  document.addEventListener('click', () => {
    setIsHidden(true);
  });

  return (
    <div className="App">
      <h1>React clock</h1>

      {isHidden && (
        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>
          {' time is '}
          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )}
    </div>
  );
};
