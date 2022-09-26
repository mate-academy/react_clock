/* eslint-disable no-console */
import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
      window.clearInterval(this.timerId);
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
      this.timerId = this.interval();
    });

    this.timerId = this.interval();
  }

  interval() {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      console.log(this.state.clockName);
    }, 3300);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
