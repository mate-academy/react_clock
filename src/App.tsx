import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.oncontextmenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('mouseup', this.mouseClickHandler);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('mouseup', this.mouseClickHandler);
  }

  mouseClickHandler = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }

    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div>
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
