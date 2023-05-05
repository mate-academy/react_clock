import React from 'react';
import './App.scss';
import { Clock } from './component/Clock/Clock';

type State = {
  clockName:string;
  hasClock:boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  upClock: NodeJS.Timer | null = null;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();
      this.setState({ hasClock: true });
    });

    this.upClock = setInterval(() => {
      const value = Date.now().toString().slice(-4);
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to Clock-${value}`);
      this.setState({ clockName: `Clock-${value}` });
    }, 3300);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockname={clockName} />}
      </div>
    );
  }
}
