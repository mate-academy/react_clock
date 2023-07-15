import React from 'react';
import './App.scss';
import { Clock } from './componets/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.PureComponent {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameId = 0;

  componentDidMount(): void {
    this.clockNameId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.visibilityClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.visibilityClock);
    window.clearInterval(this.clockNameId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  visibilityClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
