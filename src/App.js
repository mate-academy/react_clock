import React from 'react';

import './App.scss';
import Clock from './components/Clock/Clock';

function getRandomName() {
  return (Math.ceil(Math.random() * (100 - 1) + 1)).toString();
}

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: getRandomName(),
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        {isClockVisible
          ? <Clock name={clockName} />
          : <></>
        }

        <button
          className="app__button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: !isClockVisible });
          }}
        >
          {isClockVisible ? 'Hide' : 'Open'}
        </button>

        <button
          className="app__button"
          type="button"
          onClick={() => {
            const newName = getRandomName();

            this.setState({ clockName: newName });
            // eslint-disable-next-line
            console.log(`The Clock was renamed from ${clockName} to ${newName}.`);
          }}
        >
          Rename
        </button>
      </div>
    );
  }
}

export default App;
