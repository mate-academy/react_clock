import React from 'react';

export const Clock = ( {time} ) => (
  <div className="clock">
    <h1>React clock</h1>
    <p>
      Current time:
      {' '}
      {time.toLocaleTimeString()}
    </p>
  
    {/* eslint-disable-next-line */}
    {console.log(`Current time: ${time.toLocaleTimeString()}`)}
  </div>
);