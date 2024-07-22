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
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timeTimerId: number | undefined;

  nameTimerId: number | undefined;

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({
      hasClock: true,
      today: new Date(),
    });
  };

  componentDidMount(): void {
    this.timeTimerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(now.toUTCString().slice(-12, -4));
      }
    }, 1000);

    this.nameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeTimerId);
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} time={today.toUTCString().slice(-12, -4)} />
        )}
      </div>
    );
  }
}
