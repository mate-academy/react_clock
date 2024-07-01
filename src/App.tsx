import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  timerId: number | null = null;

  state = {
    today: new Date(Date.now()),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState(prevState => {
        const now = new Date();

        if (prevState.hasClock) {
          // eslint-disable-next-line no-console
          console.log(now.toUTCString().slice(-12, -4));
        }

        return { today: now };
      });
    }, 1000);

    window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}
