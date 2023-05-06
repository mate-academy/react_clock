/* eslint-disable no-console */
import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  randomName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  intervalId = 0;

  state = {
    randomName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    this.changeClockVisibility(false, 'contextmenu');
    this.changeClockVisibility(true, 'click');

    this.intervalId = window.setInterval(() => {
      this.setState({ randomName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps:{}, prevState:State): void {
    if (
      this.state.hasClock
      && prevState.randomName
      !== this.state.randomName
    ) {
      console.debug(
        `Renamed from ${prevState.randomName} to ${this.state.randomName}`,
      );
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  changeClockVisibility(shouldShow:boolean, typeListener: string) {
    document.addEventListener(typeListener, event => {
      event.preventDefault();

      this.setState({ hasClock: shouldShow });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.hasClock
          && <Clock randomName={this.state.randomName} />
        }
      </div>
    );
  }
}
