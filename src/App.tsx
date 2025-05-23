import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  private timerId1: number | null = null;

  private timerId2: number | null = null;

  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault(); // Запобігаємо появі контекстного меню
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId1 = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(prevProps: {}, prevState: State): void {
    if (
      this.state.hasClock &&
      prevState.today.toUTCString() !== this.state.today.toUTCString()
    ) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.hasClock}`,
      );
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    if (this.timerId1) {
      window.clearInterval(this.timerId1);
    }

    if (this.timerId2) {
      window.clearInterval(this.timerId2);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <Clock name={this.state.clockName} />

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
