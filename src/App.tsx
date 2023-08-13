import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    this.timerId = window.setInterval(() => {
      this.updateName();
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  updateName() {
    this.setState({
      clockName: getRandomName(),
    });
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              <Clock />
            </span>
          </div>
        )}
      </div>
    );
  }
}
