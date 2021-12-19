import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showTime = () => (
    this.setState({ isClockVisible: true })
  );

  hideTime = () => (
    this.setState({ isClockVisible: false })
  );

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
        <button type="button" onClick={this.showTime}>Show Clock</button>
        <button type="button" onClick={this.hideTime}>Hide Clock</button>
      </div>
    );
  }
}
