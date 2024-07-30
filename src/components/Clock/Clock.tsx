import React, { useState, useEffect, useRef } from 'react';
import { getTime } from '../../utils/getTime';

type Props = {
  name: string;
};

const Clock: React.FC<Props> = ({ name }) => {
  const [time, setTime] = useState(getTime());
  const prevNameRef = useRef(name);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();

      setTime(newTime);
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (prevNameRef.current !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevNameRef.current} to ${name}`);
      prevNameRef.current = name;
    }
  }, [name]);

  return (
    <div className="Clock">
      <strong className="Clock__name">{name}</strong>
      {' time is '}
      <span className="Clock__time">{time}</span>
    </div>
  );
};

export default Clock;
