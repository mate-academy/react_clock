import React, { useEffect, useRef, useState } from 'react';

type Props = {
  clockName: string;
};

export const Clock: React.FC<Props> = ({ clockName }) => {
  const [today, setToday] = useState(new Date());
  const firstRender = useRef(true);

  useEffect(() => {
    const timerIdToday = window.setInterval(() => {
      setToday(new Date());

      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    return () => {
      window.clearInterval(timerIdToday);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${clockName} to ${clockName}`);
  }, [clockName]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{clockName}</strong>

      {' time is '}

      <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
