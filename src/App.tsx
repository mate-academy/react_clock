import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  clockNameTimerId: number | undefined;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.clockNameTimerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName: clockName });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
        </div>
        {hasClock && <Clock name={this.state.clockName} />}
      </>
    );
  }
}
