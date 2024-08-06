import React, { useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
  previousName: string;
};

export const Clock: React.FC<Props> = ({ name, previousName }) => {
  const [today, setToday] = useState(new Date());
  const isFirstRenderName = useRef(true);
  const isFirstRenderTime = useRef(true);

  useEffect(() => {
    if (isFirstRenderName.current) {
      isFirstRenderName.current = false;
    } else {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${previousName} to ${name}`);
    }
  }, [name, previousName]);

  useEffect(() => {
    const setTodayInteval = window.setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => {
      clearInterval(setTodayInteval);
    };
  }, []);

  useEffect(() => {
    if (isFirstRenderTime.current) {
      isFirstRenderTime.current = false;
    } else {
      // eslint-disable-next-line no-console
      console.log(today.toUTCString().slice(-12, -4));
    }
  }, [today]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>
      {' time is '}
      <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
