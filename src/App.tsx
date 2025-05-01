import React, { useState } from 'react';
import './App.scss';
import { Clock } from './components/clock';

export const App: React.FC = () => {
  const [clockName] = useState('Clock-0');

  return (
    <div className="App">
      <h1>React clock</h1>
      <Clock name={clockName} />
    </div>
  );
};
