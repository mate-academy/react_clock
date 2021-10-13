import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

type Props = {};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <h1>
          Clock name:
          {` ${this.state.clockName}`}
        </h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </p>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({
              clockName: Math.round(Math.random() * 1000) + 1,
            });
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
