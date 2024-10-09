import React from 'react';
import './App.scss';
import { Clock } from "./components/Clock";

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  today: Date;
  hasClock: boolean;
}

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerClockId = 0;

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClockShow = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerClockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockHide);
    document.addEventListener('click', this.handleClockShow);
  }

  componentWillUnmount() {
    clearInterval(this.timerClockId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>{' '}
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
