import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component< {}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.righClickHandler);

    document.addEventListener('click', this.leftClickHandler);
  }

  componentDidUpdate(_: {}, prevState: State) {
    const { clockName, hasClock } = this.state;

    if ((clockName !== prevState.clockName) && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.righClickHandler);
  }

  righClickHandler = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({
      hasClock: false,
    });
  };

  leftClickHandler = () => {
    this.setState({
      hasClock: true,
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
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
