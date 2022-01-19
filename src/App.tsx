import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  clockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'CLOCK-1',
    clockVisible: true,
  };

  clickHandle = (value: boolean) => {
    this.setState({ clockVisible: value });
  };

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
            onClick={() => this.clickHandle(true)}
          >
            Show Clock
          </button>

          <button
            className="app__button app__button--hide"
            type="button"
            onClick={() => this.clickHandle(false)}
          >
            Hide Clock
          </button>

          {clockVisible
            ? <Clock clockName={clockName} />
            : <p>press Show button</p>}

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
