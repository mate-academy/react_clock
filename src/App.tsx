import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, Props> {
  state: Readonly<Props> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleHideClockRight = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleHideClockLeft = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClockRight);
    document.addEventListener('click', this.handleHideClockLeft);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleHideClockRight);
    document.removeEventListener('click', this.handleHideClockLeft);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
