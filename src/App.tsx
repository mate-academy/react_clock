import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [today, setToday] = useState(new Date());
  const [clockName, setClockName] = useState('Clock-0');
  const [isClockVisible, setIsClockVisible] = useState(true);
  const timeIntervalRef = useRef<number | null>(null);
  const nameIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isClockVisible) {
      timeIntervalRef.current = window.setInterval(() => {
        setToday(new Date());
      }, 1000);

      nameIntervalRef.current = window.setInterval(() => {
        setClockName(getRandomName());
      }, 3300);
    }

    return () => {
      if (timeIntervalRef.current) {
        window.clearInterval(timeIntervalRef.current);
        timeIntervalRef.current = null;
      }
      if (nameIntervalRef.current) {
        window.clearInterval(nameIntervalRef.current);
        nameIntervalRef.current = null;
      }
    };
  }, [isClockVisible]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setIsClockVisible(false);
    };

    const handleClick = () => {
      setIsClockVisible(true);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      {isClockVisible && (
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>
          {' time is '}
          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )}
    </div>
  );
};
