import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: State): void {
    const { clockName, hasClock } = this.state;

    if (clockName !== prevState.clockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

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
