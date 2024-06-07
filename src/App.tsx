import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | null = null;

  clockNameTimerId: number | null = null;

  updateTime = () => {
    const currentTime = new Date().toUTCString().slice(-12, -4);

    this.setState({
      currentTime,
    });
    // eslint-disable-next-line no-console
    console.log(currentTime);
  };

  updateClockName = () => {
    const newClockName = getRandomName();
    const oldClockName = this.state.clockName;

    this.setState({
      clockName: newClockName,
    });

    if (!this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldClockName} to ${newClockName}`);
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateTime, 1000);
    this.clockNameTimerId = window.setInterval(this.updateClockName, 3300);
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    if (this.clockNameTimerId !== null) {
      window.clearInterval(this.clockNameTimerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}
