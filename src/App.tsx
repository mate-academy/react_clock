import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleClockOn = () => {
    this.setState({ hasClock: true });
  };

  handleClockOff = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    // put your code here
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockOff);
    document.addEventListener('click', this.handleClockOn);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleClockOff);
    document.removeEventListener('click', this.handleClockOn);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
