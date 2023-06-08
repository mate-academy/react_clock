import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
// import { remove } from 'cypress/types/lodash';

type State = {
  hasClock: boolean;
  clockName:string
};

export class App extends React.Component<{}, State> {
  state =
  {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', this.addClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  addClock = () => {
    this.setState({ hasClock: true });
  };

  removeClock = () => (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
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
