import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const newRandomName = Date.now().toString().slice(-4);

  return `Clock-${newRandomName}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  nameIntervalId: number | undefined;

  onRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  onLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.onRightClick);
    document.addEventListener('click', this.onLeftClick);

    this.nameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.onRightClick);
    document.removeEventListener('click', this.onLeftClick);

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
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
