import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  clockVisible: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'CLOCK-1',
    clockVisible: 1,
  };

  hideClock = () => this.setState({ clockVisible: 0 });

  showClock = () => this.setState({ clockVisible: 1 });

  setRandomName = () => {
    this.setState({ clockName: Math.random().toString(36).substring(2, 8).toUpperCase() });
  };

  render() {
    const { clockName, clockVisible } = this.state;

    return (
      <div className="app">
        <div className="app__container">
          <button
            className="app__button app__button--show"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            className="app__button app__button--hide"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          {clockVisible
            ? (<Clock clockName={clockName} />)
            : (<p>press Show button</p>)}

          <button
            className="app__button app__button--set-name"
            type="button"
            onClick={this.setRandomName}
          >
            Set Random Name
          </button>
        </div>
      </div>
    );
  }
}
