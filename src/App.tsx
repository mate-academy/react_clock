import { Component } from 'react';
import { Clock } from './Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date,
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    window.clearInterval(this.timerId);
  }

  handleContextMenu = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {hasClock && <Clock today={today} clockName={clockName} />}
      </>
    );
  }
}
