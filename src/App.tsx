import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const clockName = Date.now().toString().slice(-4);

  return `Clock - ${clockName}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'clock - 0',
  };

  timeInConsole = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: false });
    });

    this.timeInConsole = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeInConsole);
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          {this.state.hasClock && <Clock clockName={this.state.clockName} />}
        </div>
      </>
    );
  }
}
