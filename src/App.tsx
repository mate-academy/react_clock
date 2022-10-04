import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: false,
    clockName: getRandomName(),
  };

  date = new Date();

  clockNameTimer = 0;

  componentDidMount() {
    this.setState({ hasClock: true });
    this.clockNameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: Event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => (
      this.setState({ hasClock: true })
    ));
  }

  componentWillUnmount() {
    clearInterval(this.clockNameTimer);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock name={clockName} />}
      </div>
    );
  }
}
