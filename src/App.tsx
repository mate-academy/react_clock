import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  timerId: number | undefined;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clickHandler = () => {
    this.setState({ hasClock: true });
  };

  contextMenuHandler = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    document.addEventListener('click', this.clickHandler);
    document.addEventListener('contextmenu', this.contextMenuHandler);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('contextmenu', this.contextMenuHandler);
  }
  // this code stops the timer

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
