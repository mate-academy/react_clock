import { Component } from 'react';

import { Clock } from './Clock';

import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  randomNameInterval = 3300;

  componentDidMount() {
    document.addEventListener('mouseup', this.clickHandler);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, this.randomNameInterval);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.clickHandler);
    window.clearInterval(this.timerId);
  }

  clickHandler = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({
        hasClock: true,
      });
    }

    if (event.button === 2) {
      this.setState({
        hasClock: false,
      });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
