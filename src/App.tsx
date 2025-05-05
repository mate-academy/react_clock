import React, { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [randomName, setRandomName] = useState('Clock-0');
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [currentSecond, setCurrentSecond] = useState<number>(0);
  const [deleteHasClock, setdeleteHasClock] = useState<boolean>(true);

  useEffect(() => {
    const timer02 = setInterval(() => {
      setRandomName(getRandomName);
    }, 3300);

    window.addEventListener('click', () => {
      setdeleteHasClock(false);
    });

    window.addEventListener('contextmenu', e => {
      e.preventDefault();
      setdeleteHasClock(true);
    });

    return () => {
      clearInterval(timer02);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSecond(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  }, [currentSecond]);

  return (
    <Clock
      clockName={randomName}
      currentTime={currentTime}
      deleteHasClock={deleteHasClock}
    />
  );
};
