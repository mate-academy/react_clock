import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {
  timerId?: number | undefined;
};

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  // This code starts a timer
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  // componentDidUpdate(
  //   _prevProps: Readonly<{}>,
  //   prevState: Readonly<State>,
  // ): void {
  //   if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
  //     // eslint-disable-next-line no-console
  //     console.warn(
  //       `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
  //     );
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
