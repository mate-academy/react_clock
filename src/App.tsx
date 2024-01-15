import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './services/RandomName';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    window.clearInterval(this.timerId);
  };

  handleLeftClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.setState({ hasClock: true });
    }

    if (event.key === ' ') {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div
        className="App"
        onContextMenu={this.handleRightClick}
        onClick={this.handleLeftClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h1>React clock</h1>

        {hasClock ? (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <Clock />
          </div>
        ) : (
          null
        )}
      </div>
    );
  }
}
