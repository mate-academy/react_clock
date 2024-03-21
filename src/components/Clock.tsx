import React, { useEffect, useState } from 'react';

interface Props {
  name: string;
}

export const Clock: React.FC<Props> = ({ name }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formattedTime = currentTime.toUTCString().slice(-12, -4);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(formattedTime);
  }, [formattedTime]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>

      {' time is '}

      <span className="Clock__time">{formattedTime}</span>
    </div>
  );
};
