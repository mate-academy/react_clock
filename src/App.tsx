import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  today: Date;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: false,
    today: new Date(),
  };

  clockName = 'Clock-0';

  timerId?: number;

  timerTimeId?: number;

  handleContextmenu = (event: Event) => {
    event.preventDefault();
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerTimeId);
    this.setState({ hasClock: false });
  };

  startTimerName = () => {
    this.timerId = window.setInterval(() => {
      this.clockName = getRandomName();
      // eslint-disable-next-line no-console
      console.log(this.clockName);
    }, 3300);
  };

  startTimer = () => {
    this.setState({ hasClock: true });

    this.timerTimeId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }, 1000);
  };

  handleClick = () => {
    this.startTimer();
    this.startTimerName();
  };

  componentDidMount(): void {
    this.startTimer();
    this.startTimerName();
    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.clockName}</strong>

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
