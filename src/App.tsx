import React from 'react';
import './App.scss';
import { Clock } from './Clock';

const CLOCK_NAME_CHANGE_INTERVAL = 3300;

type State = {
  clockName: string;
  hasClock: boolean;
};

const getRandomName = () => {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameChangeTimerId = 0;

  componentDidMount(): void {
    this.clockNameChangeTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, CLOCK_NAME_CHANGE_INTERVAL);

    document.addEventListener('contextmenu', this.disableClockVisibility);
    document.addEventListener('click', this.ableClockVisibility);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameChangeTimerId);
    document.removeEventListener('contextmenu', this.disableClockVisibility);
    document.removeEventListener('click', this.ableClockVisibility);
  }

  ableClockVisibility = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  disableClockVisibility = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        { hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
