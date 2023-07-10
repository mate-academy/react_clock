import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { getRandomName } from './services/clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.PureComponent {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);

    window.clearInterval(this.clockNameTimerId);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  showClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={clockName}
          />
        )}
      </div>
    );
  }
}
