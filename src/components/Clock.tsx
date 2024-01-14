/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

type Props = {
  hasClock: boolean;
  clockName: string;
};

export const Clock: React.FC<Props> = React.memo(({ hasClock, clockName }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timerId = 0;

    if (hasClock) {
      timerId = window.setInterval(() => {
        const newTime = new Date();

        console.info(newTime.toUTCString().slice(-12, -4));
        setCurrentTime(newTime);
      }, 1000);
    }

    return () => {
      window.clearInterval(timerId);
    };
  }, [hasClock]);

  return (
    hasClock ? (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    ) : null
  );
});
