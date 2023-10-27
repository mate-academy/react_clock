import { useState, useEffect } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const Clock: React.FC = () => {
  const [clockName, setClockName] = useState('Clock-0');
  const [today, setToday] = useState(new Date());

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

  return (
    <div className="Clock">
      <strong className="Clock__name">
        {clockName}
      </strong>
      {' time is '}
      <span className="Clock__time">
        {today.toUTCString().slice(-12, -4)}
      </span>
    </div>
  );
};
