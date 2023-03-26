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
  oldName: string,
  newName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    time: '',
    oldName: 'Clock-0',
    newName: '',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    window.setInterval(() => {
      if (this.state.hasClock === true) {
        console.info(this.state.time);
      }
    }, 1000);

    window.setInterval(() => {
      this.setState({ newName: getRandomName() });

      if (this.state.hasClock === true) {
        console.info(`Renamed from ${this.prevState()} to ${this.state.newName}`);
      }
    }, 3300);

    document.addEventListener('mousedown', this.clockShow);
  }

  prevState = () => {
    this.state.oldName = this.state.newName;
  };

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
