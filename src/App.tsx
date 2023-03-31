/* eslint-disable no-console */
import React from 'react';
// import { render } from 'react-dom';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  time: string;
  timerName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    time: '',
    timerName: 'Clock-0',
    hasClock: true,
  };

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState(({ timerName: getRandomName() }
      ));
    }, 3300);

    window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      console.info(this.state.time);
    }, 1000);

    document.addEventListener('mousedown', this.clockShow);
  }

  componentDidUpdate(prevState: State) {
    if (this.state.hasClock === true
      && this.state.timerName !== prevState.timerName) {
      console.info(`Renamed from ${prevState.timerName} to ${this.state.timerName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    document.removeEventListener('mousedown', this.clockShow);
  }

  clockShow = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 2) {
      this.setState({ hasClock: false });
    } else {
      this.setState({ hasClock: true });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {this.state.timerName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.time}
            </span>
          </div>
        )}
      </div>
    );
  }
}
