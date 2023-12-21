import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimerId = 0;

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleToggleClock);
    document.addEventListener('click', this.handleToggleClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);

    document.removeEventListener('contextmenu', this.handleToggleClock);
    document.removeEventListener('click', this.handleToggleClock);
  }

  handleToggleClock = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState((prevState) => ({
      hasClock: !prevState.hasClock,
    }));
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        { hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
