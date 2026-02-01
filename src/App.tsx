/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable padding-line-between-statements */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameTimerId: number | undefined;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount() {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
