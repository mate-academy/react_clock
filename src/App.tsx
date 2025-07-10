import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  timerId: number;
};

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  private timerId?: number;

  state = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isClockVisible: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ isClockVisible: true });
    }
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('mousedown', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('mousedown', this.handleLeftClick);
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}
