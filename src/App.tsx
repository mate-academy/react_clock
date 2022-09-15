import { Component } from 'react';
import './App.scss';

import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  threeSecondTimer = 0;

  componentDidMount() {
    this.threeSecondTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: State, prevState: State) {
    // eslint-disable-next-line
    this.state.hasClock && console.debug(
      `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.threeSecondTimer);

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });
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
