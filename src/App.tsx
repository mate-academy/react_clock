import React, { useState } from 'react';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [isfirstMount, setIsfirstMount] = useState(true);
  const [clockName, setClockName] = useState(
    isfirstMount ? 'Clock-0' : getRandomName(),
  );

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setHasClock(false);
  });

  document.addEventListener('click', () => {
    setHasClock(true);
  });

  const saveMount = (m: boolean) => setIsfirstMount(m);
  const saveClockName = (name: string) => setClockName(name);

  return (
    <div className="App">
      <h1>React clock</h1>

      {hasClock && (
        <Clock
          isfirstMount={isfirstMount}
          saveMount={saveMount}
          clockName={clockName}
          saveClockName={saveClockName}
        />
      )}
    </div>
  );
};
