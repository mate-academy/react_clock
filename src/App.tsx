import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => this.setState({ hasClock: true }));

    window.setInterval(
      () => this.setState({ clockName: getRandomName() }),
      3300,
    );
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
