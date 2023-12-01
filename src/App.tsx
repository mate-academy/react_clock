import React from 'react';
import './App.scss';

import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.handleInterval, 3300);
    document.addEventListener('contextmenu', this.handleRight);
    document.addEventListener('click', this.handleLeft);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRight);
    document.removeEventListener('click', this.handleLeft);
  }

  handleInterval = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleRight = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeft = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
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
