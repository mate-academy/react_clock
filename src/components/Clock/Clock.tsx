import React, { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
}

export const Clock: React.FC<Props> = ({ name }) => {
  const [time, setTime] = useState(new Date());
  const [currentName, setCurrentName] = useState(name);

  const firstRender = useRef(true);

  useEffect(() => {
    const timerIdClock = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));

      setTime(currentTime);
    }, 1000);

    return () => {
      window.clearInterval(timerIdClock);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    if (currentName != name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${currentName} to ${name}`);
      setCurrentName(name);
    }
  }, [name]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>

      {' time is '}

      <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
