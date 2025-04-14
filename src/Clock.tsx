import React, { useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
};

export const Clock: React.FC<Props> = ({ name }) => {
  const [today, setToday] = useState(new Date());

  let timerNumber = 0;

  const prevName = useRef<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerNumber = window.setInterval(() => {
      setToday(new Date());
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    return () => {
      window.clearInterval(timerNumber);
    };
  }, []);

  useEffect(() => {
    if (prevName.current !== null) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName.current} to ${name}`);
    }

    prevName.current = name;
  }, [name]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>

      {' time is '}

      <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
