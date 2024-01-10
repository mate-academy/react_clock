import React, { useEffect, useState } from 'react';

function getRandomName(previousName: string): string {
  const value = Date.now().toString().slice(-4);

  // eslint-disable-next-line no-console
  console.debug(`Renamed from ${previousName} to ${value}`);

  return `Clock-${value}`;
}

function getCurrentTime(): string {
  const currentDate = new Date();

  return currentDate.toUTCString().slice(-12, -4);
}

export const Clock: React.FC = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [clockName, setClockName] = useState('Clock-0');

  useEffect(() => {
    let timerId = 0;
    let timerName = 0;

    // This code starts a timer
    timerName = window.setInterval(() => {
      setClockName(getRandomName(clockName));
    }, 3300);

    timerId = window.setInterval(() => {
      const currentTime = getCurrentTime();

      // eslint-disable-next-line no-console
      console.info(currentTime);
      setTime(currentTime);
    }, 1000);

    return () => {
      window.clearInterval(timerId);
      window.clearInterval(timerName);
    };
  }, [clockName]);

  return (
    <div className="Clock">
      <strong className="Clock__name">
        {clockName}
      </strong>

      {' time is '}

      <span className="Clock__time">
        {time}
      </span>
    </div>

  );
};
