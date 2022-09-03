import { Component } from 'react';

import { Clock } from './Components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('mouseup', this.clickEvent);

    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('mouseup', this.clickEvent);

    window.clearInterval(this.timerId);
  }

  clickEvent = (event: MouseEvent) => {
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

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
