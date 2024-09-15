import React, { useEffect, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [today, setTime] = useState(new Date());
  const [clockName, setClockName] = useState('Clock-0');
  const [oldClockName, setOldClockName] = useState('Clock-0');
  const [isClockVisble, setIsClockVisble] = useState(true);

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setIsClockVisble(false);
  });

  document.addEventListener('click', () => {
    setIsClockVisble(true);
  });

  useEffect(() => {
    if (isClockVisble) {
      const intervalId = setInterval(() => {
        setTime(new Date());
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isClockVisble]);

  useEffect(() => {
    if (isClockVisble) {
      const timerId = window.setInterval(() => {
        setOldClockName(clockName);
        setClockName(getRandomName());

        // eslint-disable-next-line no-console
        console.log(`Renamed from ${oldClockName} to ${clockName}`);
      }, 3300);

      return () => window.clearInterval(timerId);
    }
  }, [isClockVisble]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {isClockVisble && (
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
