import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './utils/getRandomName';

type Props = {};
type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleAddClock = () => {
    this.setState({ hasClock: true });
  };

  handleRemoveClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRemoveClock);
    document.addEventListener('click', this.handleAddClock);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    const { clockName, hasClock } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      window.console.warn(
        `Renamed from ${prevState.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRemoveClock);
    document.removeEventListener('click', this.handleAddClock);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
