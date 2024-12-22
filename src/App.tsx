import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleRightClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
