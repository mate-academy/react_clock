import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './servises/getRandomName';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleClickRight);
    document.addEventListener('click', this.handleClicLeft);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleClickRight);
    document.removeEventListener('click', this.handleClicLeft);
    window.clearInterval(this.timerId);
  }

  handleClicLeft = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  handleClickRight = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          && (
            <Clock
              clockName={this.state.clockName}
            />
          )}
      </div>
    );
  }
}
