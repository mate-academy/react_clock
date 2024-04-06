import React, { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './component/Clock';
import { getRandomName } from './servises/getRandomName';

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [date, setDate] = useState<Date>(new Date());
  const [name, setName] = useState('Clock-0');

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setName(getRandomName());
    }, 3300);

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setHasClock(false);
    };

    const handleClick = () => {
      setHasClock(true);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>
      {hasClock && <Clock name={name} today={date} setDate={setDate} />}
    </div>
  );
};
