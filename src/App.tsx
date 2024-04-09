import { useState } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [clockName, setClockName] = useState('Clock-0');

  document.addEventListener('contextmenu', () => {
    setIsHidden(true);
  });

  document.addEventListener('click', () => {
    setIsHidden(false);
  });

  return (
    <div className="App">
      {!isHidden ? (
        <Clock clockNameProp={clockName} setClockNameProp={setClockName} />
      ) : (
        <h1>React clock</h1>
      )}
    </div>
  );
};
