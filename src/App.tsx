import React from 'react';

import { Clock } from './components/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
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

  renameClock = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible && <Clock clockName={clockName} />}

        <div className="buttons">
          <button type="button" onClick={this.showClock}>
            Show Clock
          </button>
          <button type="button" onClick={this.hideClock}>
            Hide Clock
          </button>
          <button type="button" onClick={this.renameClock}>
            Rename Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
