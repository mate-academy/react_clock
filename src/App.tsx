import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: '<<<Clock>>>',
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">{clockName}</h1>

        {isClockVisible && (
          <p data-cy="time" className="clock">
            Time:
            <Clock name={clockName} />
          </p>
        )}

        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
            className="clockButton"
            disabled={isClockVisible}
          >
            Show Time
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
            disabled={!isClockVisible}
            className="clockButton"
          >
            Hide Time
          </button>

          <button
            type="button"
            onClick={() => {
              const clockNumber = Math.floor(Math.random() * 100);

              this.setState({ clockName: `<<<Clock - ${clockNumber}>>>` });
            }}
            className="clockButton"
          >
            Set new name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
