import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleClick = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.isClockVisible) {
      this.setState({ isClockVisible: true });
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.isClockVisible) {
      this.setState({ isClockVisible: false });
    }
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
    this.timerId = window.setInterval(() => {
      this.setState({ ...this.state, clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.timerId);
  }

  render(): React.ReactNode {
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
