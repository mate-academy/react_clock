import { Component } from 'react';
import './App.scss';

import Clock from './components/Clock';

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

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.oncontextmenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('mouseup', this.handleClick);
  }

  componentWillUnmount() {
    document.oncontextmenu = null;
    document.removeEventListener('mouseup', this.handleClick);
  }

  handleClick = (event: MouseEvent) => {
    if (event.button === 2) {
      this.setState({ hasClock: false });
    }

    if (event.button === 0) {
      this.setState({ hasClock: true });
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
