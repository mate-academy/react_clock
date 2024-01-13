/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  randomName: () => string;
};

export const Clock: React.FC<Props> = React.memo(({ randomName }) => {
  const [hasClock, setHasClock] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const clockName = useRef('Clock-0');
  const prevClockName = useRef('');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(true);
      console.log('left button');

      if (event.button === 2) {
        setHasClock(false);
        console.log('right button');
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
      console.log('right button');
    };

    const timerId = window.setInterval(() => {
      setCurrentTime(new Date());
      console.info(currentTime.toUTCString().slice(-12, -4));
    }, 1000);

    const timerClockName = window.setInterval(() => {
      const newName = randomName();

      if (clockName.current !== newName) {
        console.debug(`prev ${clockName.current} new ${newName}`);
        prevClockName.current = clockName.current;
        clockName.current = newName;
      }
    }, 3300);

    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.clearInterval(timerId);
      window.clearInterval(timerClockName);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [randomName]);

  return (
    hasClock ? (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName.current}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    ) : null
  );
});
