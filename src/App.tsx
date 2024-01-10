import { useEffect, useState } from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { ClockFc } from './components/ClockFc';

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);

  useEffect(() => {
    const hideClock = (event: MouseEvent) => {
      event.preventDefault();

      if (event.type === 'contextmenu') {
        setHasClock(false);
      } else {
        setHasClock(true);
      }
    };

    document.addEventListener('contextmenu', hideClock);
    document.addEventListener('click', hideClock);

    return () => {
      document.removeEventListener('contextmenu', hideClock);
      document.removeEventListener('click', hideClock);
    };
  }, []);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <>
          <p>Fuction comp:</p>
          <ClockFc />
          <p>Class comp:</p>
          <Clock />
        </>
      )}
    </div>
  );
};
