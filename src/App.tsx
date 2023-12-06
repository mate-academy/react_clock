/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(this.timeId, 1000);
    window.setInterval(this.nameId, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  timeId = () => {
    if (this.state.hasClock) {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }
  };

  nameId = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <Clock name={clockName} />

            {' time is '}

            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
