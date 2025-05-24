import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  time: string;
};

class Clock extends React.PureComponent<{ name: string; time: string }> {
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.props.time}</span>
      </div>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    time: new Date().toLocaleTimeString(),
  };

  private timeIntervalId: number | undefined;

  private nameintervalId: number | undefined;

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(() => {
      if (this.state.hasClock) {
        const time = new Date().toLocaleTimeString();

        // eslint-disable-next-line no-console
        console.log(time);
        this.setState({ time });
      }
    }, 1000);

    this.nameintervalId = window.setInterval(() => {
      if (this.state.hasClock) {
        this.setState(() => ({
          clockName: getRandomName(),
        }));
      }
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timeIntervalId) {
      window.clearInterval(this.timeIntervalId);
    }

    if (this.nameintervalId) {
      window.clearInterval(this.nameintervalId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
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
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} time={this.state.time} />
        )}
      </div>
    );
  }
}
