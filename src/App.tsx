import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: true });
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
