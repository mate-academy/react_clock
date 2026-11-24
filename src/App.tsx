import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {
  name?: string;
};

type State = {
  clockName: string;
  today: Date;
  hasClock: true | false;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerId: number = 0;

  handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: true });
  };

  handleState = (currentTime: Date) => {
    this.setState({ today: currentTime });
  };

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
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={this.state.clockName}
            clockName={clockName}
            today={today}
            handleState={this.handleState}
          />
        )}
      </div>
    );
  }
}
