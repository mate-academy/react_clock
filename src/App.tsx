import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.leftClick);

    document.addEventListener('click', this.rightClick);

    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
    document.removeEventListener('contextmenu', this.leftClick);
    document.removeEventListener('click', this.rightClick);
  }

  leftClick = (event: Event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  rightClick = () => {
    this.setState({ hasClock: true });
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
