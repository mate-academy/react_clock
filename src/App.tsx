import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const CHANGE_NAME_MS = 3300;

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimer = 0;

  componentDidMount(): void {
    this.nameTimer = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, CHANGE_NAME_MS);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (!this.state.hasClock) {
      return;
    }

    const prevClockName = prevState.clockName;
    const currClockName = this.state.clockName;

    if (prevClockName !== currClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${currClockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameTimer);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
