/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu

      if (this.state.hasClock) {
        this.setState({
          hasClock: false,
        });
      }
    });

    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({
          hasClock: true,
        });
      }
    });
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>, prevState: Readonly<State>,
  ): void {
    if (this.state.hasClock) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          ? <Clock clockName={this.state.clockName} />
          : null}
      </div>
    );
  }
}
