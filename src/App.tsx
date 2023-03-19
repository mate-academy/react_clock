import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  hasClock: boolean
  clockName: string
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    this.timerId = window.setInterval(this.setRandomName, 3300);
  }

  componentDidUpdate() {
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.hideClock);

    document.removeEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  setRandomName = () => {
    this.setState({ clockName: getRandomName() });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.hasClock && <Clock clockName={this.state.clockName} />
        }
      </div>
    );
  }
}
