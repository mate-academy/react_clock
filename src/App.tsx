import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  time: string;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId: number | null = null;

  componentDidMount(): void {
    this.setState({
      ...this.state,
      time: new Date().toUTCString().slice(-12, -4),
    });
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      this.setState({ time });
      // eslint-disable-next-line no-console
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line no-console
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  timerId: number | null;
};

type AppProps = {};

export class App extends React.Component<AppProps, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    timerId: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({ ...this.state, clockName: getRandomName() });
    }, 3300);

    this.setState({ ...this.state, timerId });
    document.addEventListener('click', () => {
      this.setState({ ...this.state, hasClock: true });
    });

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ ...this.state, hasClock: false });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
