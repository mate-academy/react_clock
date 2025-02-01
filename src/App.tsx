import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  console.log(value);
  return `Clock-${value}`;
}

interface ClockProps {
  name: string;
}

class Clock extends React.Component<ClockProps> {
  state = { currentTime: new Date().toUTCString().slice(-12, -4) };
  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date().toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    hasClock: false,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState((prevState) => {
        const newName = getRandomName();
        // console.warn(`Renamed from ${prevState.clockName} to ${newName}`);
        return { clockName: newName };
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
