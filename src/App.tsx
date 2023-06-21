import { Component, ReactNode } from 'react';
import { Clock } from './Components/Clock/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hasClockFalseFunction);

    document.addEventListener('click', this.hasClockTrueFunction);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hasClockFalseFunction);
    document.removeEventListener('click', this.hasClockTrueFunction);

    window.clearInterval(this.timerId);
  }

  hasClockTrueFunction = () => {
    this.setState({ hasClock: true });
  };

  hasClockFalseFunction = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock
          && <Clock name={this.state.clockName} />
        }
      </div>
    );
  }
}
