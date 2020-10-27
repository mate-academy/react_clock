import React, { useState } from 'react';
import { Clock } from './components/CLock';

import './App.scss';

const App = () => {
  const [isClockVisible, setClockVisibility] = useState(true);
  const [clockName, setClockName] = useState(Math.floor(Math.random() * 100));

  return (
    <div className="App">
      <div className="App__time">
        {
          isClockVisible ? <Clock name={clockName} /> : ''
        }
        <button
          type="button"
          className="App__button"
          onClick={() => setClockVisibility(!isClockVisible)}
        >
          {isClockVisible ? 'Hide' : 'Show'}
        </button>

        <button
          type="button"
          className="App__button"
          onClick={() => {
            setClockName(Math.floor(Math.random() * 100));
            // eslint-disable-next-line no-console
            console.log('The Clock was renamed from oldName to newName');
          }}
        >
          Change name
        </button>
      </div>
    </div>
  );
};

export default App;
