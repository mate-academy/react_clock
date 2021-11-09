import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  isClockVisible: boolean;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  show = () => this.setState({ isClockVisible: true });

  hide = () => this.setState({ isClockVisible: false });

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock />}
        </p>
        <button onClick={this.show} type="submit">Show clock</button>
        <button onClick={this.hide} type="submit">Hide clock</button>
      </div>
    );
  }
}
