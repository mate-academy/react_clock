import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    document.addEventListener('contextmenu', (event) => {
      this.setState({ hasClock: false });

      event.preventDefault();
    });

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.addEventListener('click', (event: MouseEvent) => {
      if (event.button === 0) {
        this.setState({ hasClock: true });
      }

      if (event.button === 2) {
        this.setState({ hasClock: false });
      }
    });
  }

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
