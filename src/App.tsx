import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  visibleClock: boolean,
  clockName: string,
};
export class App extends React.Component {
  state: State = {
    visibleClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ visibleClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ visibleClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { visibleClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {visibleClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
