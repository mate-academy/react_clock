import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  today: Date,
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent<Props, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  timerIdToday = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('click', this.handleClockShow);
    document.addEventListener('contextmenu', this.handleClockHide);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    // snapshot?: any,
  ): void {
    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));

    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        'Renamed from %s to %s',
        prevState.clockName,
        this.state.clockName,
      );
    }

    if (prevProps === undefined) {
      // eslint-disable-next-line no-console
      console.info();
    }
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerIdToday);

    document.removeEventListener('click', this.handleClockShow);
    document.removeEventListener('contextmenu', this.handleClockHide);
  }

  handleClockShow = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleClockHide = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className={`Clock ${this.state.hasClock ? '' : 'is-hidden'}`}>
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
