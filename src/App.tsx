import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isVisible: true,
    name: 'Philipse',
  };

  showClocks = () => {
    // eslint-disable-next-line no-console
    console.log('showClocks');
    this.setState({ isVisible: true });
  };

  hideClocks = () => {
    // eslint-disable-next-line no-console
    console.log('hideClocks');
    this.setState({ isVisible: false });
  };

  ClockName = () => {
    const arr = ['Strela', 'Oficersky', 'CASIO', 'Meit', 'Apple', 'Sony'];

    this.setState({ name: arr[Math.floor(Math.random() * 6)] });

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed to ${this.state.name}`);
  };

  render(): React.ReactNode {
    return (
      <div className="app">

        <h1>React clock</h1>

        <div className="rolex">
          {this.state.isVisible && <Clock />}
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
            {this.state.name}
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
