import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  today: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  timerId = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <>
        {hasClock && <Clock name={clockName} today={today} />}
      </>
    );
  }
}
