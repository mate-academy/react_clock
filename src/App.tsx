import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  today: Date;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerId = 0;

  second = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.timerName, 3300);
    this.second = window.setInterval(this.secondTime, 1000);
    document.addEventListener('contextmenu', this.hide);
    document.addEventListener('click', this.show);
  }

  componentDidUpdate(_not: unknown, prevState: { clockName: string; }) {
    if (this.state.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.second);
    document.removeEventListener('contextmenu', this.hide);
    document.removeEventListener('click', this.show);
  }

  timerName = () => {
    this.setState({ clockName: getRandomName() });
  };

  secondTime = () => {
    this.setState({ today: new Date() });
  };

  hide = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  show = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    // eslint-disable-next-line no-console, @typescript-eslint/no-unused-expressions
    hasClock && console.info(today.toLocaleTimeString());

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          ? (
            <div className="Clock">
              <p>
                Click Right Mouse Button to
                <strong> Hide Clock</strong>
              </p>
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {today.toLocaleTimeString()}
              </span>
            </div>
          )
          : (
            <p>
              Click Left Mouse Button to
              <strong> Show Clock</strong>
            </p>
          )}

      </div>
    );
  }
}
