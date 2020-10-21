import React, { useState } from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

const App = () => {
  const [isClockVisible, setIsClockVisible] = useState(true);
  const [name, setName] = useState(0);

  const toggleClock = () => {
    setIsClockVisible(!isClockVisible);
  };

  const changeName = () => {
    setName((prevName) => {
      const newName = Math.floor(Math.random() * 100);

      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${newName}`);

      return newName;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">React clock</h1>
      <Clock isVisible={isClockVisible} name={name} />
      <div className="App__button-wrapper">
        <Button
          toggler={toggleClock}
          name={isClockVisible ? 'hide' : 'show'}
        />
        <Button toggler={changeName} name="rename" />
      </div>
    </div>
  );
};

export default App;
