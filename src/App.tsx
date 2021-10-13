import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <>
        <button
          className="button button-show"
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          className="button button-hide"
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>

        <button
          className="button button-random"
          type="button"
          onClick={() => this.setState({ clockName: Math.round(Math.random() * 100) })}
        >
          Set random name
        </button>
        <div className="time">
          {isClockVisible && (
            <Clock name={this.state.clockName} />) }
        </div>
      </>
    );
  }
}

export default App;
