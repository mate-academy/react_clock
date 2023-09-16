import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './utils';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    if (this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            name={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
