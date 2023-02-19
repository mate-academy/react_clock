import { Component } from 'react';
import { Clock } from './components/Clock';

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
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleLeftMouseButton);
    document.addEventListener('contextmenu', this.handleRightMouseButton);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleLeftMouseButton);
    document.removeEventListener('contextmenu', this.handleRightMouseButton);
  }

  handleLeftMouseButton = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouseButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
