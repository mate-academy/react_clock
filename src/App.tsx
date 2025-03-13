import React from 'react';
import './App.scss';
// import { render } from 'react-dom';

import { Clock } from './components/Clock';

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | undefined;

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: new Date(),
        clockName: getRandomName(),
      });

      console.warn(this.state.clockName);
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(
    _nextProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.clockName !== prevState.clockName) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    this.setState({
      today: new Date(),
      clockName: getRandomName(),
      hasClock: false,
    });

    document.removeEventListener('contextmenu', this.handleContextMenu);

    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
