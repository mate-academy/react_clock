import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNamePropery = 0;

  componentDidMount() {
    this.clockNamePropery = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.stopClock);
    document.addEventListener('click', this.startClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNamePropery);

    document.removeEventListener('contextmenu', this.stopClock);
    document.removeEventListener('click', this.startClock);
  }

  stopClock = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  startClock = () => {
    this.setState({ hasClock: true });
  };

  getRandomName = (): string => {
    const value: string = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
