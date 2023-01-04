import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component< {}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimer = 0;

  componentDidMount() {
    this.clockNameTimer = window.setInterval(() => {
      this.getRandomName();
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockHiding);
    document.addEventListener('click', this.handleClockShowing);
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { clockName, hasClock } = this.state;

    if ((clockName !== prevState.clockName) && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockNameTimer);
    document.removeEventListener('click', this.handleClockShowing);
    document.removeEventListener('contextmenu', this.handleClockHiding);
  }

  getRandomName() {
    const value = Date.now().toString().slice(-4);

    this.setState({
      clockName: `Clock-${value}`,
    });
  }

  handleClockShowing = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleClockHiding = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
