import React from 'react';
import './App.scss';

import { Clock } from './Clock';

type State = {
  clockVisible: boolean,
  clockId: number,
};

class App extends React.Component<{}, State> {
  state = {
    clockVisible: true,
    clockId: 0,
  };

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  };

  generateName = () => {
    const generateName = Math.ceil(Math.random() * 10);

    this.setState({
      clockId: generateName,
    });
  };

  render() {
    return (
      <div className="Clock">
        <h1 className="Clock__title">
          React clock
        </h1>
        <div className="Clock__button">
          <button
            className="Clock__button-hide"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="Clock__button-show"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="Clock__button-name"
            type="button"
            onClick={this.generateName}
          >
            Try another name
          </button>
        </div>

        {this.state.clockVisible && <Clock clockId={this.state.clockId} />}
      </div>
    );
  }
}

export default App;
