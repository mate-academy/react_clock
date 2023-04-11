import React, { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';
// import { extend } from 'cypress/types/lodash';

type State = {
  clockName: string,
  hasClock: boolean,
  timerId: number,
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount(): void {
    this.setState({
      timerId: window.setInterval(() => {
        this.setState({ clockName: this.getRandomName() });
      }, 3300),
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerId);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <Clock clockName={clockName} />
            </div>
          )}
      </div>
    );
  }
}
