import React from 'react';
import './App.scss';

type State = {
  today: Date,
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  timerTwo = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerTwo = window.setInterval(() => {
      if (this.state.hasClock) {
        this.setState({ today: new Date() });
        // eslint-disable-next-line no-console
        console.info(this.state.today.toUTCString().slice(-12, -4));
      }
    }, 1000);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerTwo);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {
          this.state.hasClock && (
            <div className="Clock">
              <strong className="Clock__name">
                {this.state.clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {this.state.today.toUTCString().slice(-12, -4)}
              </span>
            </div>
          )
        }
      </div>
    );
  }
}
