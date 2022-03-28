import React from 'react';

import { Clock } from './Clock';
import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate(_prevProps: Props, prevState: State) {
    // eslint-disable-next-line no-console
    console.log(`
      The Clock was renamed from
      ${prevState.clockName} to ${this.state.clockName}
    `);
  }

  setVisibleClock = () => {
    this.setState((prevState) => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  };

  setRandomNumber = () => {
    this.setState({ clockName: Math.round(Math.random() * 10) });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.setVisibleClock}
          >
            {isClockVisible ? 'Hide' : 'Show'}
          </button>

          <button
            type="button"
            onClick={this.setRandomNumber}
          >
            Name
          </button>
        </div>

        {
          isClockVisible
            ? <Clock name={this.state.clockName} />
            : <h1>Time for party</h1>
        }
      </div>
    );
  }
}

export default App;
