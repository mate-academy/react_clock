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
  oldName: string | {},
  newName: string | {},
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    time: '',
    oldName: 'Clock-0',
    newName: 'Clock-0',
    hasClock: true,
  };

  timerID = 0;

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    this.timerID = window.setInterval(() => {
      this.setState(prevState => (
        { oldName: prevState.newName }
      ));

      this.setState({ newName: getRandomName() });
    }, 3300);

    document.addEventListener('mousedown', this.clockShow);
  }

  componentDidUpdate(prevProps: {}, prevState: {}) {
    if (this.state.hasClock === true
      && this.state.oldName !== prevState
      && this.state.newName !== prevState
      && this.state.oldName !== prevProps
      && this.state.newName !== prevProps) {
      console.info(`Renamed from ${this.state.oldName} to ${this.state.newName}`);
    }

    if (this.state.hasClock === true
      && this.state.time !== prevState
      && this.state.time !== prevProps) {
      console.info(this.state.time);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    document.removeEventListener('mousedown', this.clockShow);
  }

  clockShow = (click: MouseEvent) => {
    click.preventDefault();

    if (click.button === 2) {
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
              {this.state.newName}
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
