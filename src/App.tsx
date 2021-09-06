import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function randomName() {
  const num = Math.floor(Math.random() * 5 + 5);
  let randomString = '';

  for (let i = 0; i <= num; i += 1) {
    randomString += String.fromCodePoint(Math.floor(26 * Math.random() + 97));
  }

  return randomString;
}

type State = {
  isClockVisible: boolean;
  clockName: string | null;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: null,
  };

  render() {
    const date = new Date();
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock time={date.toLocaleTimeString()} name={clockName} />}
        </p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            this.setState({ clockName: randomName() });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
