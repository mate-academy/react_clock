import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.showClock);

    this.timerId = window.setInterval(this.setRandomName, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClock);

    document.removeEventListener('click', this.showClock);

    window.clearInterval(this.timerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  setRandomName = () => {
    this.setState({
      clockName: getRandomName(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
