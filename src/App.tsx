import React from 'react';
import './App.scss';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean,
  clockName: string,
  timerId: number,
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    timerId: 0,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.state.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
    window.clearInterval(this.state.timerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
