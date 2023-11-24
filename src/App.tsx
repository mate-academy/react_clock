import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName?: string,
  hasClock?: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId2 = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(): void {
    if (this.state.hasClock) {
      window.clearInterval(this.timerId2);
      this.timerId2 = window.setInterval(() => {
        this.setState({
          clockName: getRandomName(),
        });
        // eslint-disable-next-line no-console
        console.debug('Renamed from oldName to newName');
      }, 3300);
    }
  }

  componentWillUnmount(): void {
    if (!this.state.hasClock) {
      window.clearInterval(this.timerId2);
    }
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    window.clearInterval(this.timerId2);
    this.setState({
      hasClock: false,
    });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock
          && (
            <Clock
              name={this.state.clockName}
              showClock={this.state.hasClock}
            />
          )}
      </div>
    );
  }
}
