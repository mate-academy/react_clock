import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

type ClockState = {
  date: Date;
};

class Clock extends React.Component<{ name: string }> {
  state: ClockState = {
    date: new Date(),
  };

  timerId?: number;

  updateTime() {
    const now = new Date();

    this.setState({ date: now });

    // eslint-disable-next-line no-console
    console.log(now.toUTCString().slice(-12, -4));
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => this.updateTime(), 1000);
  }

  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId?: number;

  updateName() {
    this.setState({ clockName: getRandomName() });
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => this.updateName(), 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
