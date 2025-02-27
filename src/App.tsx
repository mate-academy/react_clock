import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  timeNowText: Date;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerNameId = 0;

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });

    this.timerNameId = window.setInterval(() => {
      const newClockName = this.getRandomName();

      this.setState(() => ({
        clockName: newClockName,
      }));
    }, 3300);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerNameId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
