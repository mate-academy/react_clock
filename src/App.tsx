import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.handleClickLeft);
    document.addEventListener('contextmenu', this.handleClickRight);

    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
  // this code stops the timer
    window.clearInterval(this.timerId);
  }

  handleClickRight = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClickLeft = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
