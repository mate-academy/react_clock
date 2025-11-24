import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  nameTimerId: number | null;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    nameTimerId: null,
  };

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    const timerID = window.setInterval(() => {
      this.changeClockName();
    }, 3300);

    this.setState({ nameTimerId: timerID });

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount() {
    const { nameTimerId } = this.state;

    if (nameTimerId !== null) {
      window.clearInterval(nameTimerId);
    }

    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    if (prevState.clockName !== this.state.clockName) {
      if (prevState.clockName && this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.warn(
          `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
        );
      }
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
