import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
};

export class App extends React.PureComponent<{}, State> {
  public state = {
    hasClock: true,
  };

  public timerId1 = 0;

  public timerId2 = 0;

  public handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  public handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  // This code starts a timer
  componentDidMount(): void {
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}
