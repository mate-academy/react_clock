import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

const NAME_CHANGE_DELAY = 3300;

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameChangeTimerId = 0;

  componentDidMount(): void {
    this.startNameChangeTimer();
    document.addEventListener('contextmenu', this.handleClockVisibilityOff);
    document.addEventListener('click', this.handleClockVisibilityOn);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameChangeTimerId);
    document.removeEventListener('contextmenu', this.handleClockVisibilityOff);
    document.removeEventListener('click', this.handleClockVisibilityOn);
  }

  startNameChangeTimer = () => {
    this.nameChangeTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, NAME_CHANGE_DELAY);
  };

  handleClockVisibilityOn = () => (
    this.setState({ hasClock: true })
  );

  handleClockVisibilityOff = (event: MouseEvent) => {
    event.preventDefault();

    return this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
