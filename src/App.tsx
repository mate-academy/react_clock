import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleRightCLick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
    // put your code here
  };

  handleLeftCLick = () => {
    this.setState({ hasClock: true });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightCLick);
    document.addEventListener('click', this.handleLeftCLick);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.handleRightCLick);
    window.removeEventListener('click', this.handleLeftCLick);
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
