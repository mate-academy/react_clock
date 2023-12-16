import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  timerId: number,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    timerId: 0,
    hasClock: true,
  };

  componentDidMount() {
    this.setState({
      timerId: window.setInterval(() => {
        const lastName = this.state.clockName;
        const nameForClock = getRandomName();

        this.setState({ clockName: nameForClock });

        // eslint-disable-next-line react/no-access-state-in-setstate
        if (this.state.hasClock) {
          // eslint-disable-next-line no-console
          // console.info(nameForClock);
          // eslint-disable-next-line no-console
          console.debug(`Renamed from ${lastName} to ${nameForClock}`);
        }
      }, 3300),
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      if (event) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      if (event) {
        this.setState({ hasClock: true });
      }
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
