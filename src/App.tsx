import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  }

  currentTime = 0;

  componentDidMount(): void {
    this.currentTime = window.setInterval(() => {
      this.setState({ clockName: getRandomName() })
    }, 3300)

    document.addEventListener('contextmenu', this.handleHideclock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleHideclock);
    document.removeEventListener('click', this.handleShowClock);
  }

  handleHideclock = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock === false) {
      return;
    }

    this.setState({ hasClock: true });
  }

  handleShowClock = () => {
    if (this.state.hasClock === true) {
      return;
    }

    this.setState({ hasClock: true });
  }

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
};
