import React, { useState } from 'react';
import './App.scss';
import { Clock } from './Clock';

export const App: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    setIsHidden(false);
  });

  document.addEventListener('click', () => {
    setIsHidden(true);
  });

  return (
    <div className="App">
      <h1>React clock</h1>

      {isHidden && (
        <Clock />
      )}
    </div>
  );
};
