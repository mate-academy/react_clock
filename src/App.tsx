import React from 'react';
import './App.scss';
import { Clock } from './clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

const defaultClockName = 'Clock-0';
const defaultDelayClockName = 3300;

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: defaultClockName,
  };

  handlerNotActive = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handlerActive = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, defaultDelayClockName);

    document.addEventListener('contextmenu', this.handlerNotActive);
    document.addEventListener('click', this.handlerActive);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            onNotActive={this.handlerNotActive}
          />
        )}
      </div>
   );
  }
}
