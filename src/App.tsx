// eslint-disable-next-line max-classes-per-file
import React from 'react';

interface ClockProps {
  name: string;
  visible: boolean;
}

interface ClockState {
  time: string;
}

class Clock extends React.Component<ClockProps, ClockState> {
  timerId: number | null = null;

  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);
      this.setState({
        time: currentTime,
      });
      // eslint-disable-next-line no-console
      console.info(currentTime);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return this.props.visible ? (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    ) : null;
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

class App extends React.Component<{}, AppState> {
  timerId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId ?? 0);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock name={this.state.clockName} visible={this.state.hasClock} />
      </div>
    );
  }
}

function getRandomName() {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}

export { App };
