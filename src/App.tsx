import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'New',
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomName = () => {
    const newRandomName = `Clock ${Math.ceil(Math.random() * 10)}`;

    this.setState((prevState) => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${newRandomName}`);

      return { clockName: newRandomName };
    });
  };

  render() {
    return (
      <div className="App">
        {(this.state.isClockVisible) && <Clock clockName={this.state.clockName} />}
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>

        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
