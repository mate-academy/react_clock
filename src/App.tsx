import React, { Component } from 'react';
import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  firstUpdate: boolean;
}

class App extends Component<{}, AppState> {
  clockNameTimerId?: NodeJS.Timeout;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
    firstUpdate: true,
  };

  componentDidMount(): void {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.clockNameTimerId = setInterval(() => {
      const newClockName = getRandomName();

      this.setState({
        clockName: newClockName,
        firstUpdate: false,
      });
    }, 3300);
  }

  componentDidUpdate(prevProps: AppState) {
    const newClockName = getRandomName();
    const { clockName } = this.state;

    if (prevProps.clockName !== newClockName && this.state.hasClock === true) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${clockName} to ${newClockName}`);
    } else {
      // eslint-disable-next-line no-console
      console.warn('eslint-disable-next-line no-console');
    }
  }

  componentWillUnmount(): void {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    if (this.clockNameTimerId) {
      clearInterval(this.clockNameTimerId);
    }
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
