import React from 'react';
import './App.scss';
import { Clock } from './Component/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  clockStatus: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    clockStatus: true,
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ clockStatus: false });
  };

  handleLeftClick = () => {
    this.setState({ clockStatus: true });
  };

  render(): React.ReactNode {
    const { clockStatus, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {clockStatus && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
