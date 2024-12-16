import React from 'react';
import './App.scss';
function getRandomName(): string {
  const value = Date.now().toString().slice(-4);
  return `Clock-${value}`;
}
class Clock extends React.Component<{ name: string }, { time: string }> {
  private timerId: number | null = null;
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);
      this.setState({ time: newTime });
      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }
  componentDidUpdate(prevProps: { name: string }) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }
  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };
  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }
  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }
  handleRightClick = () => {
    this.setState({ hasClock: false });
  };
  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };
  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
