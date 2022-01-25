import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type Props = {};

type State = {
  clockName: number;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  state: State = {
    clockName: Math.random(),
    isClockVisible: true,
  };

  clockOnOff = (isClockVisible: boolean) => {
    this.setState({
      isClockVisible,
    });
  };

  randomName = () => {
    this.setState({
      clockName: Math.random(),
    });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (<Clock name={this.state.clockName} />)}
        </p>
        <button
          type="button"
          onClick={() => {
            this.clockOnOff(true);
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.clockOnOff(false);
          }}
        >
          Hide Clock
        </button>
        <div>
          <button
            type="button"
            onClick={this.randomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
