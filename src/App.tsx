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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('click', this.makeVisible);
    document.addEventListener('contextmenu', this.makeHide);
    window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.makeVisible);
    document.addEventListener('contextmenu', this.makeHide);
  }

  makeVisible = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  makeHide = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
