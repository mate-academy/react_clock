// Clock.tsx
import React, { useEffect, useState } from 'react';

interface ClockProps {
  onUpdateTime: () => void;
}

const Clock: React.FC<ClockProps> = ({ onUpdateTime }) => {
  const [clockName, setClockName] = useState<string>('Clock-0');
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toUTCString().slice(-12, -4),
  );

  useEffect(() => {
    const timerId = window.setInterval(() => {
      onUpdateTime();
      setCurrentTime(new Date().toUTCString().slice(-12, -4));
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [onUpdateTime]);

  useEffect(() => {
    const nameUpdateTimerId = window.setInterval(() => {
      setClockName(`Clock-${Date.now().toString().slice(-4)}`);
    }, 3300);

    return () => {
      window.clearInterval(nameUpdateTimerId);
    };
  }, []);

  return (
    <div className="Clock" role="presentation">
      <strong className="Clock__name">{clockName}</strong>
      {' time is '}
      <span className="Clock__time">{currentTime}</span>
    </div>
  );
};

export default Clock;
