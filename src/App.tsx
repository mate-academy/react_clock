import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  clockVisibility: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisibility: true,
    clockName: 100,
  };

  showClock = () => {
    this.setState({
      clockVisibility: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisibility: false,
    });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { clockVisibility, clockName } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">React clock</h1>
          <div className="App_clock">
            {clockVisibility && (
              <Clock clockName={clockName} />
            )}
          </div>
          <div className="App__buttons">
            <button
              type="button"
              className="App__button"
              disabled={clockVisibility}
              onClick={this.showClock}
            >
              Show Clock
            </button>
            <button
              type="button"
              className="App__button"
              disabled={!clockVisibility}
              onClick={this.hideClock}
            >
              Hide Clock
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.changeName}
            >
              Rename Clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
