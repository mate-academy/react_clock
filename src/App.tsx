import React from 'react';
import './App.scss';

type State = {
  clockName: string;
  today: string;
  hasClock: boolean;
};

class Clock extends React.Component<State> {
  state = {
    clockName: 'Clock-0',
    today: new Date().toString().slice(16, 24),
    hasClock: true,
  };

  timerId = 0;

  timeId = 0;

  value = new Date().toString().slice(-12, -4);

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);

    this.timeId = window.setInterval(() => {
      this.showTime();
      this.setState({
        today: this.getNewTime(),
      });
    }, 1000);
  }

  shouldComponentUpdate(_nextProps: never, nextState: State) {
    if (this.state.hasClock && !nextState.hasClock) {
      clearInterval(this.timerId);
      clearInterval(this.timeId);
    }

    return true;
  }

  componentDidUpdate(
    _prevProps: never,
    prevState: { clockName: string; hasClock: boolean },
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }

    if (!prevState.hasClock && this.state.hasClock) {
      this.timerId = window.setInterval(() => {
        this.setState({
          clockName: this.getRandomName(),
        });
      }, 3300);

      this.timeId = window.setInterval(() => {
        this.showTime();
        this.setState({
          today: this.getNewTime(),
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timeId);
  }

  getNewTime() {
    this.state.today = new Date().toString().slice(16, 24);

    return this.state.today;
  }

  getRandomName() {
    this.value = Date.now().toString().slice(-4);

    return `Clock-${this.value}`;
  }

  showTime() {
    // eslint-disable-next-line no-console
    return console.debug(this.state.today);
  }

  render() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('mouseup', () => {
      this.setState({
        hasClock: true,
      });
    });

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">{this.state.today}</span>
          </div>
        )}
      </div>
    );
  }
}

export const App: React.FC = () => (
  <Clock
    hasClock
    clockName="Clock-0"
    today={new Date().toString().slice(16, 24)}
  />
);
