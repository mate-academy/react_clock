import React, { useEffect, useState } from 'react';

type Props = {
  clockName: string;
  prevClockNameRef: {
    current: string;
  };
};

export const Clock: React.FC<Props> = ({ clockName, prevClockNameRef }) => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    if (clockName !== prevClockNameRef.current) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockNameRef.current} to ${clockName}`);
    }

    const timerIdToday = window.setInterval(() => {
      setToday(new Date());

      // if (hasClock) {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
      // }
    }, 1000);

    return () => {
      window.clearInterval(timerIdToday);
    };
  }, [clockName, prevClockNameRef]);

  return (
    <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
  );
};
