import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    window.addEventListener('contextmenu', this.hideClock);
    window.addEventListener('click', this.unhideClock);
  }

  componentWillUnmount() {
    // window.clearInterval();

    window.removeEventListener('contextmenu', this.hideClock);
    window.removeEventListener('click', this.unhideClock);
  }

  unhideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: true,
    });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
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
