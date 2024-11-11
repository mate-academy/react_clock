import React, { Component } from 'react';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    currentDate: new Date().toUTCString().slice(-12, -4),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      this.setState({ currentDate: newDate });
      // eslint-disable-next-line no-console
      console.log(newDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentDate}</span>
      </div>
    );
  }
}

export class App extends Component<{}, State> {
  timer = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightMouse);
    document.addEventListener('click', this.handleLeftMouse);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
    document.removeEventListener('contextmenu', this.handleRightMouse);
    document.removeEventListener('click', this.handleLeftMouse);
  }

  handleRightMouse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftMouse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
