import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timeId = 0;

  currentTime = 0;

  componentDidMount(): void {
    document.addEventListener('click', event => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', event => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    this.timeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
