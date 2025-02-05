import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number = 0;

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  update() {
    window.clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidMount(): void {
    this.update();

    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
  }

  componentWillUnmount(): void {
    if (!this.state.hasClock) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} showClock={hasClock} />}
      </div>
    );
  }
}
