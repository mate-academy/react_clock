import React, { useState } from 'react';
import { Clock } from './components/Clock';

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setHasClock(false);
  });

  document.addEventListener('click', () => {
    setHasClock(true);
  });

  const saveClockName = (name: string) => setClockName(name);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <Clock
          clockName={clockName}
          saveClockName={saveClockName}
        />
      )}
    </div>
  );
};
