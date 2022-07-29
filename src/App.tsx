import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    // date: new Date(),
    hasClock: true,
    clockName: getRandomName(),
  };

  newRandomName = 0;

  componentDidMount() {
    this.newRandomName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.noClock);

    document.addEventListener('click', (
    ) => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: {}, currentProps: State) {
    // eslint-disable-next-line no-console
    console.log(`Renamed from ${currentProps.clockName} to ${this.state.clockName}`);
  }

  noClock = () => {
    this.setState({ hasClock: false });
  };
  // componentWillUnmount() {
  //   console.log('fooooo')
  //   document.removeEventListener('contextmenu', this.noClock);
  //   window.clearInterval(this.newRandomName);
  // }

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
