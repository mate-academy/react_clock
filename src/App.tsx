import './App.scss';
import React from 'react';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
