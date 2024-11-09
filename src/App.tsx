/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

interface State {
  hasClock: boolean;
  clockName: string;
  timerId: any;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    timerId: 0,
  };

  clickHandler(event: MouseEvent, value: boolean): any {
    event.preventDefault();

    this.setState({ hasClock: value });
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({
        timerId: this.setState({ clockName: this.getRandomName() }),
      });
    }, 3300);

    document.addEventListener('click', e => this.clickHandler(e, true));
    document.addEventListener('contextmenu', e => this.clickHandler(e, false));
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', e => this.clickHandler(e, true));
    document.removeEventListener('contextmenu', e =>
      this.clickHandler(e, false),
    );
  }

  render() {
    const { hasClock, clockName, timerId } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} timerId={timerId} />}
      </div>
    );
  }
}
