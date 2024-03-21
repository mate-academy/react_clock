import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  clockTimerId = 0;

  randomTimerId = 0;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightButton);
    document.addEventListener('click', this.handleLeftButton);
    this.clockTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.randomTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: string, prevState: State) {
    if (this.state.today !== prevState.today) {
      // eslint-disable-next-line no-console
      console.log(
        `${String(this.state.today.getHours()).padStart(2, '0')}:${String(this.state.today.getMinutes()).padStart(2, '0')}:${String(this.state.today.getSeconds()).padStart(2, '0')}`,
      );
    }

    if (this.state.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
    window.clearInterval(this.randomTimerId);
  }

  handleRightButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    this.componentWillUnmount();
  };

  handleLeftButton = () => {
    this.setState({ hasClock: true });
    if (!this.state.hasClock) {
      this.componentDidMount();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          hasClock={this.state.hasClock}
          clockName={this.state.clockName}
          today={this.state.today}
        />
      </div>
    );
  }
}
