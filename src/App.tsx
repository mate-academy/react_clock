import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  renamedId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
      clearInterval(this.renamedId);
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
      this.updateClockName();
    });
    this.updateClockName();
  }

  componentWillUnmount() {
    window.clearInterval(this.renamedId);
    document.removeEventListener('contextmenu', () => {});
    document.removeEventListener('click', () => {});
  }

  updateClockName = () => {
    this.renamedId = window.setInterval(() => {
      const newClockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
      this.setState({ clockName: newClockName });
    }, 3300);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}

      </div>
    );
  }
}
