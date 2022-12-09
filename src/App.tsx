import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

type Props = {
  name: string,
};

export class App extends React.Component <{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerName = 0;

  componentDidMount() {
    this.timerName = window.setInterval(() => {
      this.setState({ clockName: `${this.getRandomName()}` });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    /* eslint-disable no-console */
    console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timerName);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
