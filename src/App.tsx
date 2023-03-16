import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameChangeTimerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.leftMouseClickHandler);
    document.addEventListener('contextmenu', this.rightMouseClickHandler);

    this.clockNameChangeTimerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.leftMouseClickHandler);
    document.removeEventListener('contextmenu', this.rightMouseClickHandler);

    window.clearInterval(this.clockNameChangeTimerId);
  }

  leftMouseClickHandler = (): void => (
    this.setState({ hasClock: true })
  );

  rightMouseClickHandler = (event: Event): void => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
