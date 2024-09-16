import React, { useEffect, useState } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const Clock: React.FC = () => {
  const [today, setTime] = useState(new Date());
  const [clockName, setClockName] = useState('Clock-0');
  const [isClockVisible, setIsClockVisible] = useState(true);

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      setIsClockVisible(false);
    };

    const handleClick = () => {
      setIsClockVisible(true);
    };

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (isClockVisible) {
      const intervalId = setInterval(() => {
        setTime(new Date());
        // eslint-disable-next-line no-console
        console.log(new Date().toUTCString().slice(-12, -4));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isClockVisible]);

  useEffect(() => {
    if (isClockVisible) {
      const timerId = window.setInterval(() => {
        setClockName(prevClockName => {
          const newClockName = getRandomName();

          // eslint-disable-next-line no-console
          console.warn(`Renamed from ${prevClockName} to ${newClockName}`);

          return newClockName;
        });
      }, 3300);

      return () => window.clearInterval(timerId);
    }
  }, [isClockVisible]);

  return (
    <div className="App">
      <h1>React Clock</h1>

      {isClockVisible && (
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
