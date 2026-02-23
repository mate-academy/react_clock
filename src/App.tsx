import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getClockName(): string {
  return `Clock-${String(Date.now()).slice(-4)}`;
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

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    setInterval(() => {
      this.setState({ clockName: getClockName() });
    }, 3300);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
