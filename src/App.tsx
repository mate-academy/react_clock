import React from 'react';
import './App.scss';

export const App: React.FC = () => {
  //@ts-ignore
  const timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  return (
    <div className="App">
      <h1>React clock</h1>
      <p>
        Current time:
        {' '}
        {/* Print the time here instead of DevTools */}
      </p>
    </div>
  );
};
