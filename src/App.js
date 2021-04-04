import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    visible: true,
    name: Math.trunc(Math.random() * 100),
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}.`);
    }
  }

  hideClock = () => {
    this.setState({
      visible: false,
    });
  }

  showClock = () => {
    this.setState({
      visible: true,
    });
  }

  changeName =() => {
    this.setState({
      name: Math.ceil(Math.random() * 100),
    });
  }

  render() {
    const { visible, name } = this.state;

    return (
      <div className="app">
        <div className="text">
          <h1>React clock</h1>
          {visible && <Clock name={name} />}
          <p>
            Name:
            {name}
          </p>
        </div>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>
          <button
            className="button"
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>
          <button
            className="button"
            type="button"
            onClick={this.changeName}
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}
