import React from 'react';
import { Clock } from './Clock';
import './App.scss';

interface State {
  isClockVisible: boolean,
  number: number,
  clockName: string
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
    number: 0,
    clockName: '',
  };

  active = () => {
    const { isClockVisible } = this.state;

    this.setState({
      isClockVisible: !isClockVisible,
    });
  };

  random = () => {
    const randomNumber = Math.round(Math.random() * 100);
    const { number } = this.state;

    this.setState({ number: randomNumber });

    this.setState({ clockName: `The Clock was renamed from ${number} to ${randomNumber}.` });

    // eslint-disable-next-line no-console
    console.log(this.state.clockName);
  };

  render() {
    const { isClockVisible } = this.state;
    const nameButton = isClockVisible ? 'Show' : 'Hide';

    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.active}>
          {nameButton}
        </button>
        <button type="button" onClick={this.random}>
          Set random name
        </button>
        {(!isClockVisible)
          && <Clock name={this.state.clockName} isClockVisible={this.state.isClockVisible} />}
      </div>
    );
  }
}
