import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}
type Props = {};

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  randomNum: NodeJS.Timeout | null = null;

  clockRun: NodeJS.Timeout | null = null;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
      this.stopClocks();
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
      this.startClock();
    });

    if (this.state.hasClock) {
      this.startClock();
    }
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (this.state.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    this.stopClocks();
  }

  startClock() {
    this.clockRun = setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);

    this.randomNum = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  stopClocks() {
    if (this.clockRun && this.randomNum) {
      clearInterval(this.clockRun);
      clearInterval(this.randomNum);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}
