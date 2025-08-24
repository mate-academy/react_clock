import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  time: Date | null;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    time: null,
    clockName: 'Clock-0',
    hasClock: true,
  };

  // This code starts a timer

  timerIdInterval = window.setInterval(() => {
    this.setState({
      clockName: this.getRandomName(),
    });
  }, 3300);

  timerInterval = window.setInterval(() => {
    this.setState({
      time: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }, 1000);

  timerIntervalReset = () => {
    this.timerInterval = window.setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  };

  timerId = () => {
    return this.timerIdInterval;
  };

  timer = (): number => {
    return this.timerInterval;
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  hiddenClock = () => this.setState({ hasClock: false });

  showClock = () => this.setState({ hasClock: true });

  hasClockControlFunction = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.hiddenClock();
    window.clearInterval(this.timerInterval);
  };

  hasClockControl = () => {
    return window.addEventListener('contextmenu', this.hasClockControlFunction);
  };

  showClockOnLeftClickAction = (event: MouseEvent) => {
    event.preventDefault();

    this.showClock();
    this.timerIntervalReset();
    this.timer();
  };

  showClockOnLeftClick = window.addEventListener(
    'click',
    this.showClockOnLeftClickAction,
  );

  componentDidMount() {
    this.setState({ time: new Date() });
    this.timerId();
    this.timer();
    this.hasClockControl();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerInterval);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} time={this.state.time} />
        )}
      </div>
    );
  }
}
