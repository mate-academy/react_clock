import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
    clockName: 'Philipse',
  };

  showClocks = () => {
    this.setState({ isVisible: true });
  };

  hideClocks = () => {
    this.setState({ isVisible: false });
  };

  ClockName = () => {
    const arr = ['Strela', 'Oficersky', 'CASIO', 'Meit', 'Apple', 'Sony'];

    this.setState({ clockName: arr[Math.floor(Math.random() * 6)] });
  };

  render(): React.ReactNode {
    const { isVisible, clockName } = this.state;

    return (
      <div className="app">

        <h1>React clock</h1>

        <div className="rolex">
          {isVisible && <Clock name={this.state.clockName} />}
        </div>

        <div className="clock">
          <button
            className="clock__button button"
            type="button"
            onClick={this.showClocks}
          >
            Show
          </button>
          <button
            className="clock__button button"
            type="button"
            onClick={this.hideClocks}
          >
            Hide
          </button>

          <p className="clock__name-name">
            {clockName}
          </p>
          <button
            className="clock__button button"
            type="button"
            onClick={this.ClockName}
          >
            New Clocks name
          </button>

        </div>
      </div>
    );
  }
}

export default App;
