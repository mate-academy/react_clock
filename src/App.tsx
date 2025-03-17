import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  private timeId: NodeJS.Timeout | null = null;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleContextClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  handleClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextClock);

    document.addEventListener('click', this.handleClick);

    this.timeId = setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextClock);
    document.removeEventListener('click', this.handleClick);

    if (this.timeId) {
      clearInterval(this.timeId);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
