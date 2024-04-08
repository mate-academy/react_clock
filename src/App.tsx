import { useState } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  document.addEventListener('contextmenu', () => {
    setIsHidden(true);
  });

  document.addEventListener('click', () => {
    setIsHidden(false);
  });

  return (
    <div className="App">{!isHidden ? <Clock /> : <h1>React clock</h1>}</div>
  );
};
