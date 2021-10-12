import React from 'react';
import { Clock } from './Clock';
import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
    clockName: 0,
  };

  viewClockHandler = () => {
    const { isClockVisible } = this.state;

    this.setState({
      isClockVisible: !isClockVisible,
    });
  };

  setName = () => {
    const randomNumber = Math.round(Math.random() * 100);

    this.setState({ clockName: randomNumber });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const nameButton = isClockVisible ? 'Show' : 'Hide';

    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.viewClockHandler}>
          {nameButton}
        </button>
        <button type="button" onClick={this.setName}>
          Set random name
        </button>
        {(!isClockVisible)
          && <Clock name={clockName} />}
      </div>
    );
  }
}
