/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {
  hasClock: boolean
};

type State = {
  hasClock: boolean
  clockName: string
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    hasClock: this.props.hasClock,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleClick);

    this.enableClockNameTimer();
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
    window.clearInterval(this.clockNameTimerId);
  }

  enableClockNameTimer = () => {
    this.clockNameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      if (this.state.hasClock) {
        console.debug(`Renamed from ${this.state.clockName} to ${newName}`);
      }

      this.setState({ clockName: newName });
    }, 3300);
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({
        hasClock: false,
      });
    }
  };

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({
        hasClock: true,
      });
    }
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
