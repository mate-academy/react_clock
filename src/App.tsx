import React, { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState('Clock-0');
  const [previousName, setPreviousName] = useState('');

  const handleClikcForTrue = (e: MouseEvent) => {
    e.preventDefault();
    setVisible(false);
  };

  const handleClikcForFalse = (e: MouseEvent) => {
    e.preventDefault();
    setVisible(true);
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleClikcForTrue);

    return () => {
      document.removeEventListener('contextmenu', handleClikcForTrue);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClikcForFalse);

    return () => {
      document.removeEventListener('click', handleClikcForFalse);
    };
  }, []);

  useEffect(() => {
    const setNameInteval = window.setInterval(() => {
      setPreviousName(name);
      setName(getRandomName());
    }, 3300);

    return () => {
      clearInterval(setNameInteval);
    };
  }, [name]);

  return (
    <div className="App">
      <h1>React clock</h1>

      {visible ? <Clock name={name} previousName={previousName} /> : <></>}
    </div>
  );
};
