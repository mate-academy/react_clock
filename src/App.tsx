/* eslint-disable no-console */
import React from 'react';
// import { render } from 'react-dom';
import './App.scss';
// import { event } from 'cypress/types/jquery';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerID = 0;

  componentDidMount() {
    window.addEventListener('click', this.clockShow);
    window.addEventListener('contextmenu', this.clockShow);

    this.timerID = window.setInterval(() => {
      this.setState(({ clockName: getRandomName() }
      ));
    }, 3300);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.hasClock === true
      && this.state.clockName !== prevState.clockName && prevProps) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    document.removeEventListener('mousedown', this.clockShow);
  }

  clockShow = (e: MouseEvent) => {
    e.preventDefault();

    if (e.button === 2) {
      this.setState({ hasClock: false });
    } else {
      this.setState({ hasClock: true });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.hasClock
        && (<Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
