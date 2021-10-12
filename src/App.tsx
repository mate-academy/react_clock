import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export type Props = {};

export type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomName = () => {
    const newName = Math.floor(Math.random() * 100);

    this.setState({ clockName: newName });
  };

  showClock = () => {
    const { isClockVisible } = this.state;

    this.setState({ isClockVisible: !isClockVisible });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const buttonText = isClockVisible ? 'Hide Clock' : 'Show Clock';

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          {buttonText}
        </button>
        {isClockVisible
        && (
          <button
            className="button"
            type="button"
            onClick={() => {
              this.setRandomName();
            }}
          >
            Set random name
          </button>
        )}
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
