import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });

    window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({
        clockName: getRandomName(),
      });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${oldName} to ${this.state.clockName}`);
      }
    }, 3300);
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
