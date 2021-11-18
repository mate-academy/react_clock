import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          <Clock isClockVisible={isClockVisible} name={this.state.clockName} />
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.floor(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
