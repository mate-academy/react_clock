import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  currentTime: Date;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  nameTimerId: number | null = null;

  timeTimerId: number | null = null;

  state: State = {
    clockName: 'Clock-0',
    currentTime: new Date(),
    hasClock: true,
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true, currentTime: new Date() });
    if (!this.timeTimerId) {
      this.timeTimerId = window.setInterval(() => {
        const newTime = new Date();

        // eslint-disable-next-line no-console
        console.log(newTime.toUTCString().slice(-12, -4));

        this.setState({
          currentTime: newTime,
        });
      }, 1000);
    }
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
      this.timeTimerId = null;
    }

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    this.timeTimerId = window.setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));

      this.setState({
        currentTime: newTime,
      });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (!this.state.hasClock) {
      return;
    }

    if (!prevState.hasClock && this.state.hasClock) {
      return;
    }

    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }

    if (this.timeTimerId) {
      window.clearInterval(this.timeTimerId);
    }
  }

  render() {
    const { clockName, currentTime, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {currentTime.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
