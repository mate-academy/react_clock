import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextmenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleContextmenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextmenu = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
