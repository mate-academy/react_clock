import { Component } from 'react';
import { Clock } from './Clock';
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
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = 0;

  componentDidMount() {
    document.addEventListener('click', this.addClock);

    document.addEventListener('contextmenu', this.removeClock);

    this.clockId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.addClock);

    document.removeEventListener('contextmenu', this.removeClock);
    window.clearInterval(this.clockId);
  }

  addClock = () => {
    this.setState({ hasClock: true });
  };

  removeClock = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
