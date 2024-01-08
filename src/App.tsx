import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleClockShow);
    document.addEventListener('contextmenu', this.handleClockHide);
  }

  handleClockShow = (event: MouseEvent) => {
    event.preventDefault();
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
