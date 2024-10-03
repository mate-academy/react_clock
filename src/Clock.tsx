import React, { useEffect, useRef, useState } from 'react';
type Props = {
  clockName: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function usePrevious(value: any): any {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export const Clock: React.FC<Props> = ({ clockName }) => {
  const [today, setToday] = useState(new Date());

  const firstRender = useRef(true);
  const prevClockName = usePrevious({ clockName });

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

    if (prevClockName !== clockName) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevClockName?.clockName} to ${clockName}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockName]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{clockName}</strong>
      {' time is '}
      <span className="Clock__time">{today.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
