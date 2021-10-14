import React from 'react';

import './App.scss';
import { Clock } from './Clock/clock';

interface State {
  isClockVisible: boolean;
  name: number;
}

export default class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    name: 0,
  };

  buttonStatus = () => this.setState(({ isClockVisible }) => ({ isClockVisible: !isClockVisible }));

  nameStatus = () => this.setState({ name: Math.floor(Math.random() * 100) });

  render() {
    const { isClockVisible, name } = this.state;
    const btnStatus = isClockVisible ? 'Close clock' : 'Open clock';

    return (
      <>
        <div className="app">
          <h1 className="app__item">React clock</h1>
          <p className="app__item">
            Current time:
            {' '}
            {isClockVisible && <Clock />}
          </p>
          <button
            type="button"
            onClick={this.buttonStatus}
            className="app__button"
          >
            {btnStatus}
          </button>
          <p className="app__item">
            Name:
            {' '}
            {name}
          </p>
          <button
            type="button"
            onClick={this.nameStatus}
            className="app__button"
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}
