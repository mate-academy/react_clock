import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClockVisible: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  handleClick = () => {
    this.setState({ isClockVisible: true });
  };

  currentTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
