import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  name: string,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: 'Clock 0',
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
      console.log(`The Clock was renamed from ${prevState.name} to ${newRandomName}`);

      return { name: newRandomName };
    });
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>

        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
        {(this.state.isClockVisible) && <Clock name={this.state.name} />}
      </div>
    );
  }
}

export default App;
