import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type TState = {
  time: Date;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, TState> {
  timerId = 0;

  timerNameId = 0;

  state: TState = {
    time: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(this.tick, 1000);
    this.timerNameId = window.setInterval(this.tickName, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    clearInterval(this.timerNameId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });

    if (this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }
  };

  tickName = () => {
    this.setState({
      clockName: this.getRandomName(),
    });
  };

  render() {
    const { time, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock time={time} clockName={clockName} />}
      </div>
    );
  }
}
