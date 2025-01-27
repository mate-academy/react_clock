import React from 'react';
import './App.scss';
import { Clock } from './componens/clock.components';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  //
};

type State = {
  clockName: string;
  hasClock: boolean;
  intervalId: number | null;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
    intervalId: null,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId);
    }
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleClockName = () => {
    const timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.setState({
      intervalId: timerId,
    });
  };

  componentDidUpdate(_: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock clockName={clockName} handleClockName={this.handleClockName} />
        )}
      </div>
    );
  }
}
