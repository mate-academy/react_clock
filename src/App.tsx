import React from 'react';
import './App.scss';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class Clock extends React.Component<{ name: string }> {
  state = {
    time: new Date(),
  };

  timerID: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerID = setInterval(() => {
      const newTime = new Date();

      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameInterval: NodeJS.Timeout | null = null;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
    this.startNameInterval();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    this.clearNameInterval();
  }

  startNameInterval = () => {
    if (!this.nameInterval) {
      this.nameInterval = setInterval(this.updateClockName, 3300);
    }
  };

  clearNameInterval = () => {
    if (this.nameInterval) {
      clearInterval(this.nameInterval);
      this.nameInterval = null;
    }
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockName = () => {
    // const oldName = this.state.clockName;
    const newName = getRandomName();

    this.setState(prevState => {
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newName}`);
      }

      return { clockName: newName };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
