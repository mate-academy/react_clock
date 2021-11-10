import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

interface State {
  isClockVisible: boolean;
}

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock />}

        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>
      </div>
    );
  }
}
