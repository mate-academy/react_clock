import React from 'react';
import './App.scss';
import Clock from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prev_Props: any, prevState: State): void {
    const prevClockName = prevState.clockName;

    if (prevClockName !== this.state.clockName && this.state.hasClock) {
      console.debug(`Renamed from ${prevClockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        {this.state.hasClock && (
          <Clock
            hasClock={this.state.hasClock}
            clockName={this.state.clockName}
          />
        )}
      </div>
    );
  }
}

export default App;
