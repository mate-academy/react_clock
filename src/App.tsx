import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  today: Date;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  timerId = 0;

  dateTimerId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimerId);
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.handleRightClick);
    window.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} today={today} />}
      </div>
    );
  }
}
