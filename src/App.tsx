// eslint-disable-next-line max-classes-per-file
import React, { Component, MouseEvent } from 'react';
import './App.scss';

interface ClockProps {
  name: string;
  time: string;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

class Clock extends React.Component<ClockProps> {
  componentDidUpdate(prevProps: ClockProps) {
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {this.props.time}
        </span>
      </div>
    );
  }
}

class App extends Component<{}, AppState> {
  private timerId: NodeJS.Timeout | null = null;

  private nameUpdateTimerId: NodeJS.Timeout | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date().toUTCString().slice(-12, -4),
      });
      // eslint-disable-next-line no-console
      console.info('some message');
    }, 1000);

    this.nameUpdateTimerId = setInterval(() => {
      this.setState({
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    // eslint-disable-next-line padding-line-between-statements
    if (this.nameUpdateTimerId) {
      clearInterval(this.nameUpdateTimerId);
    }
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className="App"
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            name={this.state.clockName}
            time={this.state.currentTime}
          />
        )}
      </div>
    );
  }
}

export default App;
