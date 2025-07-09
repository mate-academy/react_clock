import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  timeId: number = -1;

  updateClockNameId: number = -2;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleContextMenuClick = () => {
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenuClick);

    this.timeId = window.setInterval(() => {
      this.setState(prevState => {
        const newDate = new Date();

        if (prevState.hasClock) {
          // eslint-disable-next-line no-console
          console.log(newDate.toUTCString().slice(-12, -4));
        }

        return { today: newDate };
      });
    }, 1_000);

    this.updateClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3_300);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.updateClockNameId);
    window.clearInterval(this.timeId);

    document.removeEventListener('contextmenu', this.handleContextMenuClick);
    document.removeEventListener('click', this.handleClick);
  }

  render(): React.ReactNode {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} today={today} />}
      </div>
    );
  }
}
