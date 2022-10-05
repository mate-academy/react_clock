/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', () => this.leftClickHandler());

    document.addEventListener('contextmenu', (e) => this.rightClickHandler(e));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
    document.removeEventListener('click', this.leftClickHandler);
    document.removeEventListener('contextmenu', this.rightClickHandler);
  }

  leftClickHandler = () => {
    this.setState({
      hasClock: true,
    });
  };

  rightClickHandler = (e: Event) => {
    e.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          && (
            <Clock
              name={this.state.clockName}
            />
          )}
      </div>
    );
  }
}
