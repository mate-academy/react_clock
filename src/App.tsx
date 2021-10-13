import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: string;
  isVisibleClock: boolean;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    clockName: '',
    isVisibleClock: true,
  };

  handleShowClock = () => (
    this.setState({ isVisibleClock: true })
  );

  handleHideClock = () => {
    this.setState({ isVisibleClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isVisibleClock && (
          <p>
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
        )}

        <button
          type="button"
          onClick={this.handleShowClock}
        >
          Show
        </button>
        <button
          type="button"
          onClick={this.handleHideClock}
        >
          Hide
        </button>
      </div>
    );
  }
}

export default App;
