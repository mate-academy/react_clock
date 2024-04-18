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

  timerClockName = 0;

  componentDidMount() {
    this.timerClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  rightClick = document.addEventListener('contextmenu', (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  });

  leftClick = document.addEventListener('click', () => {
    this.setState({ hasClock: true });
  });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
